const mongoose = require('mongoose') // Require in mongoose
const Schema = mongoose.Schema // Pull the Schema off of mongoose
const CommentSchema = require('./comment_schema') // Bring in the comment schema because it needs to be embedded

// Creating the Book schema from Schema
// Notice the required, 'ref' and embedded comments

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author'
  },
  comments: [CommentSchema]
})

module.exports = BookSchema // Dont forget to export the Book Schema
