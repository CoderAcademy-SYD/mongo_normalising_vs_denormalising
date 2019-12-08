const express = require('express') // Require in express
const router = express.Router() // Requiring in the router from express  dont forget the ()
const AuthorController = require('./../controllers/author_controller') // Requiring in the Author controller

// Show all authors
router.get('/', AuthorController.index)

// Create a new author
router.post('/', AuthorController.create)

// Shows the form to create a new author (remember that 'new' is a reserved word in JS so here we chose 'make' instead)
router.get('/new', AuthorController.make)

// Shows a single author the ':id' is a wild card and is the name of the param getting passed forward to the controller under req.params
router.get('/:id', AuthorController.show)

// Deletes a single author the ':id' is a wild card
router.delete('/:id', AuthorController.destroy)

// Updates a single author the ':id' is a wild card
router.put('/:id', AuthorController.update)

// Updates a single author the ':id' is a wild card
router.patch('/:id', AuthorController.update)

// Shows the form to edit an author the ':id' is a wild card
router.get('/:id/edit', AuthorController.edit)

module.exports = router // Dont forget to export the router
