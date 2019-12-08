const express = require('express') // Require in express
const router = express.Router() // Requiring in the router from express dont forget the ()
const authorRoutes = require('./author_routes') // Requiring in the authorRoutes
const bookRoutes = require('./book_routes') // Requiring in the bookRoutes

// The below two lines allow us to split out our routes even further to their own files based on their functionality

router.use('/authors', authorRoutes) // Config the router to use the author routes
router.use('/books', bookRoutes) // Config the router to use the book routes

module.exports = router // Dont forget to export the router
