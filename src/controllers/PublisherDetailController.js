const connection = require('../database/connector.js');

class PublisherDetailController {
  // [Get] /category
  show(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT title, image, name
              FROM book 
              INNER JOIN publisher
              ON publisher.publisher_id = book.publisher_id
              WHERE publisher.name = '${name}'`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('publisherDetail', { books: results });
    });
  }
}

module.exports = new PublisherDetailController();