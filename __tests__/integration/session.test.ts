import { gql } from "apollo-server-express";

import { request } from "graphql-request";
import { createTypeormConn } from "../../src/utils/dbConnection";



describe("register", () => {

  beforeAll(async () => {
    await createTypeormConn();
  });  
  
    it('test hello world query', async () =>{
       const GET_HELLO = gql`
        query Query{
          hello
        }
      `;

      const res = await request("http://localhost:4000/graphql", GET_HELLO);// we execute our query


    expect(res).toStrictEqual({"hello": "hello World!"})
        
    
    })


})


// describe("Authentication", ()=> {

//     it('should return true if the jwt is valid', async () =>{
//                 const context = {
//                     "req": {
//                         "headers": {
//                             authorization: `Bearer ${1}`
//                         }
//                     }
//                 } as unknown as MyContext;

                
    
//     })

//     it('should return false if the authorization token is not valid', async () =>{

    
//     })

//     it('should return false if the authorization token is not passed in the body', async () =>{

    
//     })


// })

