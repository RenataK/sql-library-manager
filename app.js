const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Sequelize = require('sequelize'); //require sequelize instance 
// const models = require('./models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { isNull } = require('util');

var app = express();

//using a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'library.db'
});

// async IIFE
(async () => {
  await sequelize.sync({ force: true }); //models.sequelize?
  try {
    await sequelize.authenticate();
    console.log('Connection to the database successful!');
  } catch(error) {
    console.error('Error connecting to the database: ', error);
  }
})();

/* ERROR HANDLERS */
/* 404 handler to catch undefined or non-existent route requests */
app.use((req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message = 'Sorry! Couldn\'t find the page your\'e looking for.';
  console.log('404 error handler called');
  res.render('page-not-found', {error}); 
});

//global error handler
app.use((err, req, res, next) => {
  if (err.status == null) {
    err.status = 500;
  } else if (err.message == null) {
    err.message = 'There was a problem with the server'
  }
  console.log({err}.status + {err}.message); //Might be wrong
  res.render('error', {err}); 
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
