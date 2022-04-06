const connection = require('c:/Users/Admin/Desktop/Web/web_bookstore/src/database/connector.js');

class BookController {
  // [Get] /
  show(req, res) {
    let sql = `SELECT * FROM book`;
    connection.query(sql , function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('book/books', {books: results})
    });
  }
}

module.exports = new BookController();
