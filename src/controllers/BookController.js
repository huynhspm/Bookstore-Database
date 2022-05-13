const connection = require('../connection_database/connector.js');

class BookController {
   // [GET] /books
   show_all(req, res){
    let sql = `SELECT * FROM book`;
    connection.query(sql, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("books/show_all", {books: results});
    });
  }
  
  // [GET] /books/:slug
  show_detail(req, res) {
    let title = req.params.slug;
    let sql = `SELECT * FROM book WHERE book.title = '${title}'`;
    connection.query(sql, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render('books/show_detail', { book: results[0] });
    });
  }

  // [GET] /books/create
  create(req, res) {
    res.render('books/create')
  }

  // [POST] /books/store
  store(req, res, next) {
    res.json(req.body)
  }
}

module.exports = new BookController();
