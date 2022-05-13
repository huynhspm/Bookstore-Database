const express = require('express');
const router = express.Router();

const authorController = require('../controllers/AuthorController');

router.get('/', authorController.show);
router.get('/:slug', authorController.detail);

module.exports = router;
