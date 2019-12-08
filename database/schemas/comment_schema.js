const mongoose = require('mongoose') // Require in mongoose
const Schema = mongoose.Schema // Pull the Schema off of mongoose

// Creating the Comment schema from Schema
// Notice the Default Date.now() and that there is no comment model

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

module.exports = CommentSchema // Dont forget to export the Book Schema
