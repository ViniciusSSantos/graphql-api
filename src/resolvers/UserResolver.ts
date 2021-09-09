import { isAuth } from './../middlewares/isAuth';
import { MyContext } from './../MyContext';
import { Mutation, Resolver, InputType, Field, Arg, Query, Ctx, UseMiddleware, ObjectType } from "type-graphql";
import { BaseEntity } from "typeorm";
import { User } from "../entities/User";
import { compare, hash } from "bcryptjs"
import { sign } from 'jsonwebtoken';

@InputType()
class UserInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}



@ObjectType()
class LoginResponse {
  @Field()
  Token!: string;
  @Field(() => User)
  user!: User;
}

@Resolver()
export class UserResolver extends BaseEntity {

  @Mutation(() => User)
  async createUser(
    @Arg("input", () => UserInput) input: UserInput
  ) {
    const passwordHash = await hash(input.password, 8)
    const user = User.create({
      name: input.name,
      email: input.email,
      password: passwordHash
    })

    return user;
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  CheckMiddleware(@Ctx() { payload }: MyContext) {
    console.log(payload);
    return `your user id is: ${payload!.userId}`;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ) {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw new Error("Email incorrect");;
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Password incorrect");;
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET!,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { Token: token, user }
  }
}






