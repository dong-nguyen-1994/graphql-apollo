const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
    name: {type: String, required: true},
    genre: {type: String},
    description: {type: String},
    authorId: {type: String},
}, { timestamps: true });

module.exports = mongoose.model('books', Book);
