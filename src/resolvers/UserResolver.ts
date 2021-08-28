import { Mutation, Resolver, InputType, Field, Arg } from "type-graphql";
import { BaseEntity } from "typeorm";
import { User } from "../entities/User";
import {hash} from "bcryptjs"

@InputType()
class UserInput{   
    @Field()
    name!: string;

    @Field()
    email!: string;

    @Field()
    password!: string;
}


@Resolver()
export class UserResolver extends BaseEntity{
    @Mutation(() => User)
    async createUser(
        @Arg("input", () => UserInput) input: UserInput        
        ){
         /*    const UserAlreadyExists = await User.findOne({ where: {email: input.email}})  

            if(UserAlreadyExists){
              return {
                  errors: [{
                    field: "email",
                    message: "User already exists"
                  }]
              }
            } */
            
        const passwordHash = await hash(input.password, 8)
        
        const user = User.create({name: input.name, email: input.email, password: passwordHash})
       
        
        return user;
        
    }
    
    
}






