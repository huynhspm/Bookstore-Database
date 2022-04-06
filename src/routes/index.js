const siteRouter = require('./site');
const bookRouter = require('./book');

function route(app) {
  app.use('/', siteRouter);
  app.use('/book', bookRouter);
}

module.exports = route;
