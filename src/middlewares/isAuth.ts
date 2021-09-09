import { MiddlewareFn } from "type-graphql";
import { JwtPayload, verify } from "jsonwebtoken";
import { MyContext } from "../MyContext";


export const isAuth: MiddlewareFn<MyContext> = ({context}, next) => {

    const authToken = context.req.headers.authorization

    if (!authToken) {
        throw new Error("not authenticated");
      }

      try {
        const  sub = verify(
          authToken,
          process.env.JWT_SECRET!
        ) as JwtPayload;
        context.payload = sub as any;
       
      } catch (error){
          console.log(error);
          throw new Error("not authenticated");
      }
      return next();
}