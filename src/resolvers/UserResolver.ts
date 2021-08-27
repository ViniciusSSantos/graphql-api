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

        const user =  User.create(input);
        return await user.save();
        
    }
    
}






