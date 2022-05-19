const express = require('express');
const router = express.Router();

const authorController = require('../controllers/AuthorController');

router.get('/', authorController.show);
router.get('/:id/edit', authorController.edit);
router.put('/:id', authorController.update);
router.get('/:slug', authorController.detail);

module.exports = router;
