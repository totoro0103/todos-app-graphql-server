const {  gql } = require('apollo-server');
export default gql`
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String!, author: String): Book!
    updateBook(id: String!, title: String!, author: String): Book!
    deleteBook(id: String!): [Book]!
  }
`;