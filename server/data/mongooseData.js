const book = require('../models/Book');
const author = require('../models/Author');

const mongooseData = {
    getAllAuthors: async (condition = null) => condition === null ? await author.find() : await author.find(condition),
    createAuthor: async (args) => await author.create(args),
    getAuthorById: async (id) => await author.findById(id),

    getAllBooks: async (condition = null) => condition === null ? await book.find() : await book.find(condition),
    createBook: async (args) => await book.create(args),
    getBookById: async (id) => await book.findById(id)
}

module.exports = mongooseData;
