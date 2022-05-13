const connection = require('../connection_database/connector.js');

class HomeController {
  // [Get] /
  show(req, res, next) {
    let sql = `SELECT * FROM book LIMIT 12`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      
      const results_2d = [];
      while(results.length) results_2d.push(results.splice(0,4));

      res.render("home", {books_active: results_2d[0], books_item: results_2d.splice(1,3)});
    });
    // console.log(books_item);
  }
}

module.exports = new HomeController();