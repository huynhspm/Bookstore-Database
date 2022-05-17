const connection = require('../connection_database/connector.js');

class AuthorController {
  // [GET] /author
  show(req, res, next) {
    let sql = `SELECT * FROM author`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('author/show', { authors: results });
    });
  }

  // [GET] /author/:slug
  detail(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT b.title, b.image
                FROM book b
                INNER JOIN book_author
                USING (book_id)
                INNER JOIN author
                USING (author_id)
                WHERE name = ?`;
    connection.query(sql, [name], function (error, results) {
      if (error) {
        return console.error(error.message);
      }
      res.render('author/detail', { books: results, author: name });
    });
  }
}

module.exports = new AuthorController();
