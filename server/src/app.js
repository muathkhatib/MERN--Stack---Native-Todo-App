const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    books: [Book]
  }

  type Book {
    title: String
    author: String
  }
`;
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = new ApolloServer({ typeDefs, resolvers });
