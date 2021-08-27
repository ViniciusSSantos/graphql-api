import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { EventResolver } from "./resolvers/EventResolver";

(async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, UserResolver, EventResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: true, path: '/graphql' });

  app.listen(4000, () => {
    console.log("Server is up and running");
  });
})();