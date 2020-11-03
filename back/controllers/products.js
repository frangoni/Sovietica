//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");

const productController = {
  findAll(req, res) {
    ProductModel.find()
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
  //VER NOMBRE DE COLUMNAS DE MODELOS
  findOne(req, res) {
    ProductModel.findById(req.params.id)
      .populate("categoria")
      .populate("rv")
      .populate("talles")
      .populate("color")
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
  //VER NOMBRE DE COLUMNAS DE MODELOS
  createProduct(req, res) {
    const { name, price, img, description, category } = req.body;
    CategoryModel.findOne({
      name: category,
    }).then((category) =>
      ProductModel.create({
        name,
        price,
        img,
        description,
        category: category.id,
      })
    );
  },

  updateProduct(req, res) {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, { overwrite: true })
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  deleteProduct(req, res) {
    ProductModel.findByIdAndDelete(req.params.id)
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
};

module.exports = productController;
