import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  import { Field, ID, ObjectType } from "type-graphql";
  
  @ObjectType()
  @Entity("users")
  export class User extends BaseEntity {
   
    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id!: string;
  
    @Field(() => String)
    @Column({unique: true})
    name!: string;

    @Field(() => String)
    @Column({unique: true})
    email!: string;
  
    @Field(() => String)
    @Column()
    password!: string;  
 
  
    @Field(() => String)
    @CreateDateColumn()
    created_at!: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updated_at!: Date;
  }