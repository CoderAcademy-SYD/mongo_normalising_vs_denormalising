const mongoose = require('mongoose') // Require in mongoose
const BookSchema = require('./../schemas/book_schema') // Require in the book Schema

const BookModel = mongoose.model('book', BookSchema) // Create a book model out of the BookSchema

module.exports = BookModel // Export the Book model
