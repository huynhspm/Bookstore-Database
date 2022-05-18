const connection = require("../connection_database/connector.js");

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
      while (results.length) results_2d.push(results.splice(0, 4));

      res.render("home", {
        books_active: results_2d[0],
        books_item: results_2d.splice(1, 3),
      });
    });
  }

  // [GET] /search
  search(req, res, next) {
    let keyword = req.query.keyword;
    search_book(res, keyword);
  }
}

module.exports = new HomeController();

function search_publisher(res, keyword) {
  let sql = `SELECT b.title, b.image
            FROM book b
            INNER JOIN publisher p
            ON p.publisher_id = b.publisher_id
            WHERE p.name = ?`;
  connection.query(sql, keyword, function (error, results) {
    if (results.length == 0) {
      res.send('');
    } else {
      res.render("publisher/detail", { books: results, publisher: keyword });
    }
  });
}

function search_author(res, keyword) {
  let sql = `SELECT b.title, b.image
            FROM book b
            INNER JOIN book_author
            USING (book_id)
            INNER JOIN author
            USING (author_id)
            WHERE name = ?`;
  connection.query(sql, keyword, function (error, results) {
    if (results.length == 0) {
      search_publisher(res, keyword);
    } else {
      res.render("author/detail", { books: results, author: keyword });
    }
  });
}

function search_book(res, keyword) {
  let sql = `SELECT * 
            FROM book b 
            WHERE b.title =?`;
  connection.query(sql, [keyword], function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    console.log(results);

    if (results.length == 0) {
      search_author(res, keyword);
    } else {
      console.log('spm');

      res.render("books/show_detail", { book: results[0] });
    }
  });
}
