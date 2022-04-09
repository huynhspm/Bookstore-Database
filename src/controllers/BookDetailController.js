const connection = require('../database/connector.js');

class BookDetailController {
  // [Get] /books/:slug
  show(req, res) {
    let title = req.params.slug;
    let sql = `SELECT * FROM book WHERE book.title = '${title}'`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }

      res.render('bookDetail', { book: results });
    });
  }
}

module.exports = new BookDetailController();
