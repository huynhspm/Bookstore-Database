const express = require('express');
const router = express.Router();
const booksController = require('../controllers/BooksController');
const bookDetailController = require('../controllers/BookDetailController');

router.get('/', booksController.show);
router.get('/:slug', bookDetailController.show);
module.exports = router;
