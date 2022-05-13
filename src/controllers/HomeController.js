const connection = require("../database/connector.js");

class HomeController {
  // [Get] /
  show(req, res, next) {
    let sql = `SELECT * FROM book`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      
      const results_2d = [];
      while(results.length) results_2d.push(results.splice(0,3));

      res.render("home", { books: results_2d });
    });
  }
}

module.exports = new HomeController();
