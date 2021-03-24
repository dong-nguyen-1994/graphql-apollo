const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Author = new Schema({
    name: {type: String, required: true},
    age: {type: Number},
    email: {type: String},
    password: {type: String},
    description: {type: String},
    avatar: {type: String},
}, { timestamps: true });

module.exports = mongoose.model('authors', Author);
