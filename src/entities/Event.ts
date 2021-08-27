import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,    
    ManyToOne
  } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";
import { User } from "./User";
  

  @ObjectType()
  @Entity("events")
  export class Event extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: string;

    @Field(() => ID)
    @ManyToOne(() => User, (user) => user.id)
    created_by!: User;
  
    @Field(() => String)
    @Column()
    description!: string;

    @Field(() => String)
    @Column()
    start_date!: string;
  
    @Field(() => String)
    @Column()
    end_date!: string;   
  
    @Field(() => String)
    @Column()
    start_time!: string;

    @Field(() => String)
    @Column()
    end_time!: string;
  }