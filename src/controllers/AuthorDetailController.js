const connection = require('../database/connector.js');

class AuthorDetailController {
  // [Get] /category
  show(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT b.title, b.image
                FROM book b
                INNER JOIN book_author
                USING (book_id)
                INNER JOIN author
                USING (author_id)
                WHERE name = '${name}'`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('authorDetail', { books: results, author: name });
    });
  }
}

module.exports = new AuthorDetailController();
