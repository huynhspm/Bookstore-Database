const connection = require("../database/connector.js");

class HomeController {
  // [Get] /
  show(req, res, next) {
    let sql = `SELECT * FROM book`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render("home", { books: results });
    });
  }
}

module.exports = new HomeController();
