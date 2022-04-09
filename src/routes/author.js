const express = require('express');
const router = express.Router();

const authorController = require('../controllers/AuthorController');
const authorDetailController = require('../controllers/AuthorDetailController');

router.get('/', authorController.show);
 router.get('/:slug', authorDetailController.show);

module.exports = router;