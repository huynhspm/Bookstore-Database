const connection = require('../database/connector.js');

class BooksController {
  // [Get] /books
  show(req, res) {
    let sql = `SELECT * FROM book`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('books', { books: results });
    });
  }
}

module.exports = new BooksController();
