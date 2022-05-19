const connection = require("../connection_database/connector.js");

class AuthorController {
  // [GET] /author
  show(req, res, next) {
    show(res);
  }

  // [GET] /author/:slug
  detail(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT b.title, b.image
                FROM book b
                INNER JOIN book_author
                USING (book_id)
                INNER JOIN author
                USING (author_id)
                WHERE name = ?`;
    connection.query(sql, [name], function (error, results) {
      if (error) {
        return console.error(error.message);
      }
      res.render("author/detail", { books: results, author: name });
    });
  }

  //[GET] /author/:id/edit
  edit(req, res, next) {
    let author_id = req.params.id;
    let sql = `SELECT * 
              FROM author a
              WHERE a.author_id = ?`;

    connection.query(sql, [author_id], function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("author/edit", { author: results[0] });
    });
  }

  //[PUT] /author/:id
  update(req, res, next) {
    let author_id = req.params.id;
    console.log(author_id);

    let sql = `UPDATE author a
              SET 
                a.name = ?,
                a.image= ?
              WHERE a.author_id = ?`;
    let json_data = req.body;
    let author = Object.keys(json_data).map((key) => [json_data[key]]);
    author.splice(2, 0, author_id);

    connection.query(sql, author, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      show(res);
    });
  }
}

module.exports = new AuthorController();

function show(res) {
  let sql = `SELECT * 
              FROM author`;
  connection.query(sql, function (error, results, fields) {
    if (error) {
      return console.error(error.message);
    }
    res.render("author/show", { authors: results });
  });
}
