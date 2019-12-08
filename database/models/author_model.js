const mongoose = require('mongoose') // Require in mongoose
const AuthorSchema = require('./../schemas/author_schema') // Require in the Author Schema

const AuthorModel = mongoose.model('author', AuthorSchema) // Create a author model out of the Author Schema

module.exports = AuthorModel // Export the Author model
