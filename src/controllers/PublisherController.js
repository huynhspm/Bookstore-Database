const connection = require("../connection_database/connector.js");

class PublisherController {
  // [GET] /publisher
  show(req, res, next) {
    show(res);
  }

  // [GET] /publisher/:slug
  detail(req, res, next) {
    let name = req.params.slug;
    let sql = `SELECT b.title, b.image
              FROM book b
              INNER JOIN publisher p
              ON p.publisher_id = b.publisher_id
              WHERE p.name = ?`;
    connection.query(sql, [name], function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      res.render("publisher/detail", { books: results, publisher: name });
    });
  }

  //[GET] /publisher/:id/edit
  edit(req, res, next) {
    let publisher_id = req.params.id;
    let sql = `SELECT * 
              FROM publisher p
              WHERE p.publisher_id = ?`;

    connection.query(sql, [publisher_id], function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("publisher/edit", { publisher: results[0] });
    });
  }

  //[PUT] /publisher/:id
  update(req, res, next) {
    let publisher_id = req.params.id;
    let sql = `UPDATE publisher p
              SET 
                p.name = ?,
                p.address = ?,
                p.image = ?
              WHERE p.publisher_id = ?`;
    let json_data = req.body;
    let publisher = Object.keys(json_data).map((key) => [json_data[key]]);
    publisher.splice(3, 0, publisher_id);

    connection.query(sql, publisher, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      show(res);
    });
  }  
}

module.exports = new PublisherController();

function show(res) {
  let sql = `SELECT * FROM publisher`;
  connection.query(sql, function (error, results, fields) {
    if (error) {
      return console.error(error.message);
    }
    res.render("publisher/show", { publishers: results });
  });
}
