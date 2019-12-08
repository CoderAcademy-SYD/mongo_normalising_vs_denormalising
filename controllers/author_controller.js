const AuthorModel = require('./../database/models/author_model')

async function create (req, res) {
  // logic for creating a resource
  let { name, bio, gender } = req.body // Pulling off the name, bio and gender from the req.body
  let author = await AuthorModel.create({ name, bio, gender }).catch(err =>
    res.status(500).send(err)
  )

  res.redirect('/authors')
}

async function index (req, res) {
  let authors = await AuthorModel.find() // Shows a list of all the authors (because we did not pass in an options object)
  res.render('author/index', { authors }) // passes the array of authors through to 'authors/index'
}

function make (req, res) {
  // shows the form to create the resource
  res.render('author/new')
}

async function show (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  let author = await AuthorModel.findById(id) // Use that id to query the db with the method findById()
  res.render('author/show', { author }) // Pass the author object through to 'author/show'
}

async function destroy (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  await AuthorModel.findByIdAndRemove(id) // Use that id to query the db with the method findByIdAndRemove()
  res.redirect('/authors') // Redirect to '/authors'
}

async function update (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  let { name, bio, gender } = req.body // Pulling off the name, bio and gender from the req.body
  await AuthorModel.findByIdAndUpdate(id, { name, bio, gender }) // Use that id to query the db with the method findByIdAndUpdate()
  res.redirect(`/authors/${id}`) // Redirect the user to the show page for that specific author
}

async function edit (req, res) {
  let { id } = req.params // Id was provided by the route under the params object
  const author = await AuthorModel.findById(id) // Use that id to query the db with the method findById()
  res.render('author/edit', { author }) // Pass the author object through to 'author/edit'
}

module.exports = {
  create,
  index,
  make,
  show,
  destroy,
  update,
  edit
} // Dont forget to export the methods from this file to make them avalible elsewhere
