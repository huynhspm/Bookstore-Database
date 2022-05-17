const connection = require('../connection_database/connector.js');

class PublisherController {
  // [GET] /publisher
  show(req, res, next) {
    let sql = `SELECT * FROM publisher`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('publisher/show', { publishers: results });
    });
  }

  // [GET] /publisher/:slug
  detail(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT b.title, b.image
              FROM book b
              INNER JOIN publisher p
              ON p.publisher_id = b.publisher_id
              WHERE p.name = ?`;
    connection.query(sql, [name], function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('publisher/detail', { books: results, publisher: name });
    });
  }
}

module.exports = new PublisherController();
