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
  store(req, res) {
    let json_data = req.body;
    let data = Object.keys(json_data).map((key) => [json_data[key]]);

    let publisher = data.splice(8);
    let author = data.splice(6);
    let book = data;

    solve_publisher(publisher, author, book);
    res.render("books/create");
  }

  // [GET] books/update
  edit(req, res){
    console.log("UPDATE");
    res.render("books/edit");
  }

  // [] books/delete
  delete(req, res){
    let title = req.params.slug;

    let sql = `SELECT b.id 
              FROM book b
              WHERE b.title = ?`;

    connection.query(sql, title, function (error, results) {
      if (error) {
        return console.error(error.message);
      }

      res.render("books/show_all", { books: results });
    });

    res.send();
  }
}

module.exports = new BookController();

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

function delete_book_author(book_id){

}
