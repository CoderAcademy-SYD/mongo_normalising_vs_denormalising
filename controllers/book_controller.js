const BookModel = require('../database/models/book_model')

async function create (req, res) {
  // logic for creating a resource
  let { name, author } = req.body
  let book = await BookModel.create({ name, author }).catch(err =>
    res.status(500).send(err)
  )

  res.redirect('/books')
}

async function index (req, res) {
  let books = await BookModel.find() // Shows a list of all the books (because we did not pass in an options object)
  res.render('book/index', { books }) // passes the array of books through to 'books/index'
}

function make (req, res) {
  // shows the form to create the resource
  res.render('book/new')
}

async function show (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  let book = await BookModel.findById(id).populate('author') // Use that id to query the db with the method findById()
  res.render('book/show', { book }) // Pass the book object through to 'author/show'
}

async function destroy (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  await BookModel.findByIdAndRemove(id) // Use that id to query the db with the method findByIdAndRemove()
  res.redirect('/books') // Redirect to '/books'
}

async function update (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  let { name } = req.body // Pull the name off of the request.body
  await BookModel.findByIdAndUpdate(id, { name }) // Use that id to query the db with the method findByIdAndUpdate()
  res.redirect(`/books/${id}`) // Redirect the user to the show page for that specific book
}

async function edit (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  const book = await BookModel.findById(id) // Use that id to query the db with the method findById()
  res.render('book/edit', { book }) // Pass the book object through to 'book/edit'
}

module.exports = {
  create,
  index,
  make,
  show,
  destroy,
  update,
  edit
}
