const CategoryModel = require("../models/Category");

const categoriesController = {
  addCategory(req, res) {
    CategoryModel.create(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(500).send(err));
  },

  deleteCategory(req, res) {
    CategoryModel.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(500).send(err));
  },
  getCategories(req, res) {
    CategoryModel.find()
      .then((all) => res.status(201).send(all))
      .catch((err) => res.status(500).send(err));
  },

  
};

module.exports = categoriesController;
