const connection = require('../database/connector.js');

class PublisherDetailController {
  // [Get] /category
  show(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT b.title, b.image
              FROM book b
              INNER JOIN publisher p
              ON p.publisher_id = b.publisher_id
              WHERE p.name = '${name}'`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('publisherDetail', { books: results, publisher: name});
    });
  }
}

module.exports = new PublisherDetailController();