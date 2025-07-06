// types: int, float, string, boolean, ID (unique type in graphQL)
export const typeDefs = `#graphql
    type Game {
        id: ID!, # the ! mark means it is a required field
        title: String!,
        platform: [String!]! #the ! mark inside the array means we cannot have null data as the platform; the ! outside means we need there needs to be some value for platform which is an array of strings. Without the inside !, the array could be empty or contain null
        reviews: [Review!] #its possible to have no reviews so we dont need the ! mark outside

    }

    type Review {
        id: ID!,
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!,
        name: String!, 
        verified: Boolean!
        reviews: [Review!]
    }

    type Query { # every graphql schema requires the Query type to be defined
        reviews: [Review]
        review(id: ID!): Review 
        games: [Game]
        game(id: ID!) : Game
        authors: [Author]
        author(id:ID!): Author

    }
`

