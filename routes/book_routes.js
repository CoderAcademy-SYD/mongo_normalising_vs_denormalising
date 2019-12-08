const express = require('express') // Require in express
const router = express.Router() // Requiring in the router from express  dont forget the ()
const BookController = require('../controllers/book_controller') // Requiring in the Book controller
const CommentController = require('./../controllers/comment_controller') // Requiring in the Comment controller

// Show all books
router.get('/', BookController.index)

// Create a new book
router.post('/', BookController.create)

// Shows the form to create a new book (remember that 'new' is a reserved word in JS so here we chose 'make' instead)
router.get('/new', BookController.make)

// Shows a single book the ':id' is a wild card
router.get('/:id', BookController.show)

// Deletes a single book the ':id' is a wild card
router.delete('/:id', BookController.destroy)

// Updates a single book the ':id' is a wild card
router.put('/:id', BookController.update)

// Updates a single book the ':id' is a wild card
router.patch('/:id', BookController.update)

// Shows the form to edit a book the ':id' is a wild card
router.get('/:id/edit', BookController.edit)

// Creates a comment for a book the ':id' is a wild card
router.post('/:bookId/comment', CommentController.create)

module.exports = router // Dont forget to export the router
