// This is where we are going to set up the apollo server for graphql

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import db from './_db.js'

// types
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}

// server setup

const server = new ApolloServer({
    typeDefs, // type definitions
    resolvers // resolvers - contains resolver functions that allow us to handle incoming reqs and return data to the client
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)