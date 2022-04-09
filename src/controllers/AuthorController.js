const connection = require('../database/connector.js');

class AuthorController {
  // [Get] /author
  show(req, res, next) {
    let sql = `SELECT * FROM author`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render('author', { authors: results });
    });
  }
}

module.exports = new AuthorController();
