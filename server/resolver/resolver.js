const { books, authors } = require('../data/static');

const resolver = {
    // QUERY
    Query: {
        books: async (parent, args, {mongooseData}) => await mongooseData.getAllBooks(),
        book: async(parent, {id}, {mongooseData}) => await mongooseData.getBookById(id),
        authors: async(parent, args, {mongooseData}) => await mongooseData.getAllAuthors(),
        author: async (parent, {id}, {mongooseData}) => await mongooseData.getAuthorById(id),
    },
    Book: {
        author: async ({authorId}, args, {mongooseData}) => await mongooseData.getAuthorById(authorId),
    },
    Author: {
        books: async ({id}, args, {mongooseData}) => await mongooseData.getAllBooks({authorId: id})
    },

    // MUTATION
    Mutation: {
        createAuthor : async (parent, args, {mongooseData}) => await mongooseData.createAuthor(args),
        createBook: async (parent, args, {mongooseData}) => await mongooseData.createBook(args)
    }
}

module.exports = resolver;