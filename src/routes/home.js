const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');
const bookDetailController = require('../controllers/BookDetailController');

router.get('/', homeController.show);
module.exports = router;
