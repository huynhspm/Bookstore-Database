const connection = require('c:/Users/Admin/Desktop/Web/web_bookstore/src/database/connector.js');

class BookDetailController {
  // [Get] /
  show(req, res) {
    // [GET] /book/:slug
    let title = req.params.slug
    let sql = `SELECT * FROM book WHERE book.book_id = ${title}`;
    connection.query(sql , function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      
      res.render('book/bookDetail', {book: results})
    });
  }
}

module.exports = new BookDetailController();
