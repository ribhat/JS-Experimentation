// types: int, float, string, boolean, ID (unique type in graphQL)
export const typeDefs = `#graphql
    type Game {
        id: ID!, # the ! mark means it is a required field
        title: String!,
        platform: [String!]! #the ! mark inside the array means we cannot have null data as the platform; the ! outside means we need there needs to be some value for platform which is an array of strings. Without the inside !, the array could be empty or contain null

    }

    type Review {
        id: ID!,
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!,
        name: String!, 
        verified: Boolean!
    }

    type Query { # every graphql schema requires the Query type to be defined
        reviews: [Review]
        games: [Game]
        authors: [Author]

    }
`

