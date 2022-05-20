const connection = require("../connection_database/connector.js");

class BookController {
  // [GET] /books
  show_all(req, res, next) {
    let sql = `SELECT * 
              FROM book b`;
    show_all(res, sql);
  }

  //[GET] / books/title_desc
  title_desc(req, res, next) {
    let sql = `SELECT * 
              FROM book b
              ORDER BY b.title DESC`;
    show_all(res, sql);
  }
  
  //[GET] / books/title_asc
  title_asc(req, res, next) {
    let sql = `SELECT * 
              FROM book b
              ORDER BY b.title ASC`;
    show_all(res, sql);
  }

  //[GET] / books/price_desc
  price_desc(req, res, next) {
    let sql = `SELECT * 
              FROM book b
              ORDER BY b.price DESC`;
    show_all(res, sql);
  }

  //[GET] / books/price_asc
  price_asc(req, res, next) {
    let sql = `SELECT * 
              FROM book b
              ORDER BY b.price ASC`;
    show_all(res, sql);
  }

  // [GET] /books/:slug
  show_detail(req, res, next) {
    let title = req.params.slug;
    show_detail(res, title);
  }

  // [GET] /books/create
  create(req, res, next) {
    res.render("books/create");
  }

  // [POST] /books/store
  store(req, res, next) {
    let json_data = req.body;
    let data = Object.keys(json_data).map((key) => [json_data[key]]);

    let publisher = data.splice(8);
    let author = data.splice(6);
    let book = data;

    solve_publisher(publisher, author, book);
    res.render("books/create");
  }

  // [GET] books/:id/edit
  edit(req, res, next) {
    let book_id = req.params.id;
    let sql = `SELECT * 
              FROM book b
              WHERE b.book_id = ?`;

    connection.query(sql, [book_id], function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("books/edit", { book: results[0] });
    });
  }

  // [PUT] books/:id
  update(req, res, next) {
    let book_id = req.params.id;
    let sql = `UPDATE book b
              SET 
                b.title = ?,
                b.description = ?,
                b.price = ?,
                b.rating = ?,
                b.amount = ?,
                b.image = ?
              WHERE b.book_id = ?`;
    let json_data = req.body;
    let book = Object.keys(json_data).map((key) => [json_data[key]]);
    book.splice(6, 0, book_id);

    connection.query(sql, book, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      show_all(res);
    });
  }

  // [DELETE] books/:id
  delete(req, res, next) {
    let book_id = req.params.id;
    delete_book_author(res, book_id);
  }
}

module.exports = new BookController();

function show_all(res, sql) {
  connection.query(sql, function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    res.render("books/show_all", { books: results });
  });
}

function show_detail(res, title) {
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

function add_book_author(book_id, author_id) {
  let sql = `INSERT INTO book_author VALUES (?, ?)`;
  connection.query(sql, [book_id, author_id]);
}

function add_author(book_id, author) {
  let sql = `INSERT INTO author VALUES (Null, ?, ?)`;
  connection.query(sql, author, function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    let author_id = results.insertId;
    add_book_author(book_id, author_id);
  });
}

function solve_book_author(book_id, author) {
  let sql = `SELECT a.author_id
               FROM author a
               WHERE a.name = ?`;
  connection.query(sql, author[0], function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    if (results.length == 0) {
      add_author(book_id, author);
    } else {
      let author_id = results[0].author_id;
      add_book_author(book_id, author_id);
    }
  });
}

function add_book(author, book) {
  let sql = `INSERT INTO book VALUES (Null, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, book, function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    let book_id = results.insertId;
    solve_book_author(book_id, author);
  });
}

function add_publisher(publisher, author, book) {
  let sql = `INSERT INTO publisher VALUES (Null, ?, ?, ?)`;
  connection.query(sql, publisher, function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    let publisher_id = results.insertId;
    book.splice(4, 0, publisher_id);
    add_book(author, book);
  });
}

function solve_publisher(publisher, author, book) {
  let sql = `SELECT p.publisher_id
               FROM publisher p
               WHERE p.name = ?`;

  connection.query(sql, publisher[0], function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    if (results.length == 0) {
      add_publisher(publisher, author, book);
    } else {
      let publisher_id = results[0].publisher_id;
      book.splice(4, 0, publisher_id);
      add_book(author, book);
    }
  });
}

function delete_book(res, book_id) {
  let sql = `DELETE
            FROM book
            WHERE book_id=?`;
  connection.query(sql, [book_id], function(error, results){
    if (error) {
      return console.error(error.message);
    }

    let sql = `SELECT * 
              FROM book b`;
    show_all(res, sql);
  });
}

function delete_book_author(res, book_id) {
  let sql = `DELETE
            FROM book_author
            WHERE book_id=?`;
  connection.query(sql, [book_id], function (error, results) {
    if (error) {
      return console.error(error.message);
    }

    delete_book(res, book_id);
  });
}
