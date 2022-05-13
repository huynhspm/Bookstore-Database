const express = require('express');
const router = express.Router();

const publisherController = require('../controllers/PublisherController.js');

router.get('/', publisherController.show);
router.get('/:slug', publisherController.detail);

module.exports = router;
