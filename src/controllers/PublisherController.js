const connection = require('../database/connector.js');

class PublisherController {
  // [Get] /publisher
  show(req, res, next) {
    let sql = `SELECT * FROM publisher`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('publisher', { publishers: results });
    });
  }
}

module.exports = new PublisherController();
