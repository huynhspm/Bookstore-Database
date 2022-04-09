const homeRouter = require('./home');
const booksRouter = require('./books');
const categoryRouter = require('./category');
const authorRouter = require('./author');
const publisherRouter = require('./publisher');

function route(app) {
  app.use('/', homeRouter);
  app.use('/books', booksRouter);
  app.use('/category', categoryRouter);
  app.use('/author', authorRouter);
  app.use('/publisher', publisherRouter);
}

module.exports = route;
