// This is where we are going to set up the apollo server for graphql

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema";

const resolvers = {
    
}

// server setup

const server = new ApolloServer({
    typeDefs, // type definitions
    // resolvers - contains resolver functions that allow us to handle incoming reqs and return data to the client
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)