const connection = require('../database/connector.js');

class CategoryController {
  // [Get] /category
  show(req, res, next) {
    res.render('category');
  }
}

module.exports = new CategoryController();
