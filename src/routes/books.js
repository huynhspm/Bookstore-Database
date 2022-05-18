const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get('/', bookController.show_all);
router.get('/create', bookController.create);
router.post('/store', bookController.store);
router.get('/edit', bookController.edit);
router.get('/delete/:slug', bookController.delete);
router.get('/:slug', bookController.show_detail);

module.exports = router;
