var express = require('express');
var router = express.Router();
//requiring book model to be able to use it and all associated ORM methods(CRUD)
const Book = require('../models').Book;

/* Handler function to wrap each route. */
//Running a try/catch block to execute code and catch and exceptions thrown
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      // Forward error to the global error handler
      next(error);
    }
  }
}

/* GET Home Route */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.redirect('/books');
});

/* GET Books */
router.get('/books', asyncHandler(async (req, res) => {
  const books = await Book.findAll();
  res.render("books/books", { books, title: "Books" });
}));

/* GET/ Create a new book form. */
router.get('/books/new', (req, res) => {
  res.render("books/new", { book: {}, title: "New Book" });
});

// /* POST create book. */
router.post('/books/new', asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.create(req.body);
    res.redirect("/books");
  } catch (error) {
    if(error.name === "SequelizeValidationError") { // checking the error
      book = await Book.build(req.body);
      res.render("books/new", { book, errors: error.errors, title: "New Book" })
    } else {
      throw error; // error caught in the asyncHandler's catch block
    }  
  }
}));

/* GET individual book. */
router.get("/books/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    res.render("books/update", { book, title: book.title }); 
  } else {
    res.render('page-not-found');
  }
}));

// /* Update a book. */
router.post('/books/:id', (async (req, res) => {
  let book;
  try {
    book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update(req.body);
      res.redirect("/books");
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    if(error.name === "SequelizeValidationError") { // checking the error
      book = await Book.build(req.body);
      res.render("books/update", { book, errors: error.errors })
    } else {
      throw error; // error caught in the asyncHandler's catch block
    }  
  }
}));

/* Delete individual book. */
router.post('/books/:id/delete', asyncHandler(async (req ,res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
  await book.destroy();
  res.redirect("/books");
} else {
  res.sendStatus(404);
}
}));

module.exports = router;
