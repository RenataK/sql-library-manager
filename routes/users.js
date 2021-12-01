var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // res.redirect('/books');
});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// const Book = require('../models').Book;

// /* Handler function to wrap each route. */
// function asyncHandler(cb){
//   return async(req, res, next) => {
//     try {
//       await cb(req, res, next)
//     } catch(error){
//       // Forward error to the global error handler
//       next(error);
//     }
//   }
// }

// // router.get('/', asyncHandler(async (req, res) => {
// //   const books = await Book.findAll();
// //   res.render('books/layout', { title: 'Books' }); //books, in front of title?
// //   // console.log(books.map(book => book.toJSON()));
// // }));

// // router.get('/', asyncHandler(async (req, res) => {
// //   const articles = await Article.findAll({order: [[ "createdAt", "DESC" ]] });
// //   res.render("articles/index", { articles, title: "Sequelize-It!" });
// // }));



// /* GET Home Route */
// // router.get('/', (async (req, res) => {
// //   const books = await Article.findAll();
// //   res.render("/books", {  title: "Books!" });
// // }));

// /* GET Books */
// router.get('/books', (async (req, res) => {
//   const books = await Book.findAll();
//   res.render("books/layout", {  title: "Books!" });
// }));

// // /* GET/Create a new book form. */
// router.get('/books/new', (req, res) => {
//   res.render("new-book", { book: {}, title: "New Book" });
// });

// // /* POST create book. */
// router.post('/books/new', asyncHandler(async (req, res) => {
//   let book;
//   try {
//     book = await Book.create(req.body);
//     res.redirect("/books/" + book.id);
//   } catch (error) {
//     if(error.name === "SequelizeValidationError") { // checking the error
//       book = await Book.build(req.body);
//       res.render("books/new", { book, errors: error.errors, title: "New Book" })
//     } else {
//       throw error; // error caught in the asyncHandler's catch block
//     }  
//   }
// }));

// // /* GET individual book. */
// // router.get("/books/:id", (async (req, res) => {
// //   const book = await Book.findByPk(req.params.id);
// //   if (book) {
// //     res.render("books/show", { book, title: book.title }); 
// //   } else {
// //     res.sendStatus(404);
// //   }
// // }));

// // /* Update a book. */
// // router.post('/books/:id/', (async (req, res) => {
// //   let book;
// //   try {
// //     book = await Article.findByPk(req.params.id);
// //     if (book) {
// //       await book.update(req.body);
// //       res.redirect("/books/" + book.id);
// //     } else {
// //       res.sendStatus(404);
// //     }
// //   } catch(error) {
// //     if(error.name === "SequelizeValidationError") { // checking the error
// //       article = await Book.build(req.body);
// //       res.render("books/edit", { book, errors: error.errors, title: "Edit Book" })
// //     } else {
// //       throw error; // error caught in the asyncHandler's catch block
// //     }  
// //   }
// // }));


// // /* Delete book form. */
// // router.post('/books/:id/delete', (async (req ,res) => {
// //   const book = await Book.findByPk(req.params.id);
// //   if (book) {
// //   await book.destroy();
// //   res.redirect("/books");
// // } else {
// //   res.sendStatus(404);
// // }
// // }));

// module.exports = router;
