const connection = require('../connection_database/connector.js');

class HomeController {
  // [Get] /
  show(req, res, next) {
    let sql = `SELECT * 
              FROM book b 
              ORDER BY b.rating 
              LIMIT 12`;
    connection.query(sql, function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      
      const results_2d = [];
      while(results.length) results_2d.push(results.splice(0,4));

      res.render("home", {books_active: results_2d[0], books_item: results_2d.splice(1,3)});
    });
  }

  search(req, res, next){
    let title = req.query.title;
    let sql = `SELECT * FROM book WHERE book.title = '${title}'`;
    connection.query(sql, function (error, results) {
      if (error) {
        return console.error(error.message);
      }
      res.render('books/show_detail', { book: results[0] });
    });
  }
}

module.exports = new HomeController();