const express = require('express');
const router = express.Router();

const publisherController = require('../controllers/PublisherController.js');

router.get('/', publisherController.show);
router.get('/:id/edit', publisherController.edit);
router.put('/:id', publisherController.update);
router.get('/:slug', publisherController.detail);

module.exports = router;
