const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }
  
  type Author {
    id: ID!
    name: String
    age: Int,
    books: [Book]
  }
  
  type Query {
    books: [Book]
    book(id: Int!): Book
    authors: [Author]
    author(id: Int!): Author
  }
  
  type Mutation {
    createAuthor(id: Int!, name: String, age: Int): Author
    createBook(id: Int!, name: String, genre: String, authorId: Int!): Book
  }
`

module.exports = typeDefs;
