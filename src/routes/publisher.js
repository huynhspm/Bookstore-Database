const express = require('express');
const router = express.Router();

const publisherController = require('../controllers/PublisherController.js');
const publisherDetailController = require('../controllers/PublisherDetailController.js');

router.get('/', publisherController.show);
router.get('/:slug', publisherDetailController.show);

module.exports = router;
