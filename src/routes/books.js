const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get('/', bookController.show_all);
router.get('/title_desc', bookController.title_desc);
router.get('/title_asc', bookController.title_asc);
router.get('/price_desc', bookController.price_desc);
router.get('/price_asc', bookController.price_asc);
router.get('/create', bookController.create);
router.post('/store', bookController.store);
router.get('/:id/edit', bookController.edit);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);
router.get('/:slug', bookController.show_detail);

module.exports = router;
