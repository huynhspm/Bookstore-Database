const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');
const bookDetailController = require('../controllers/BookDetailController');

router.get('/', bookController.show);
router.get('/:slug', bookDetailController.show);
module.exports = router;
