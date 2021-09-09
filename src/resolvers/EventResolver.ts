
import { Query, Resolver } from "type-graphql";
import { Event } from "../entities/Event";

@Resolver()
export class EventResolver {
  @Query(() => [Event], { nullable: true })
  event() {
    return "testando!";
  }

}