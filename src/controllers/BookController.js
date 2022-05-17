const connection = require("../connection_database/connector.js");

class BookController {
  // [GET] /books
  show_all(req, res) {
    let sql = `SELECT * 
              FROM book`;
    connection.query(sql, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("books/show_all", { books: results });
    });
  }

  // [GET] /books/:slug
  show_detail(req, res) {
    let title = req.params.slug;
    let sql = `SELECT * 
              FROM book 
              WHERE book.title =?`;
    connection.query(sql, [title], function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("books/show_detail", { book: results[0] });
    });
  }

  // [GET] /books/create
  create(req, res) {
    res.render("books/create");
  }

  // [POST] /books/store
  store(req, res, next) {
    let json_data = req.body;
    var arr = Object.keys(json_data).map((key) => [json_data[key]]);
    var [author, publisher, image_publisher] = arr.splice(6);

    // check publisher
    let sql = `SELECT p.publisher_id 
              FROM publisher p
              WHERE p.name = ?`;

    connection.query(sql, [publisher], function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      if (results.length == 0) {
        sql = `INSERT INTO publisher VALUES (Null, ?, ?, ?)`;
        connection.query(sql, [publisher, 'TP-HN', image_publisher], function (error, results){
          if (error) {
            return console.error(error.message);
          }
          
          let publisher_id = results.insertId;
          sql = `INSERT INTO book VALUES (Null, ?, ?, ?, ?, ?, ?, ?)`;
          arr.splice(4, 0,  publisher_id);
          connection.query(sql, arr); 
        });

      } else {
        let publisher_id = results[0].publisher_id;
        sql = `INSERT INTO book VALUES (Null, ?, ?, ?, ?, ?, ?, ?)`;
        arr.splice(4, 0, publisher_id)
        connection.query(sql, arr);
      }
    });

    res.render("books/create");
  }

  // [POST] /books/search
  search(req, res, next) {
    let title = req.query.title;
    let sql = `SELECT * 
              FROM book 
              WHERE book.title = ?`;
    connection.query(sql, function (error, results) {
      if (error) {
        return console.error(error.message);
      }
      res.render("books/show_detail", { book: results[0] });
    });
  }
}

module.exports = new BookController();
