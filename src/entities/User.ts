import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  
  @ObjectType()
  @Entity()
  export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    email!: string;
  
    @Field()
    @Column()
    password!: string;  
 
  
    @Field(() => String)
    @CreateDateColumn()
    createdAt!: string;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt!: string;
  }