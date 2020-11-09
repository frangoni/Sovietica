//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const ProductModel = require("../models/Product");
const CategoryModel = require("../models/Category");

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
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  createProduct(req, res) {
    const { nombre, precio, foto, descripcion, categoria } = req.body;
    CategoryModel.findOne({
      nombre: categoria,
    })
      .then((category) =>
        ProductModel.create({
          nombre,
          precio,
          foto,
          descripcion,
          categoria: category._id,
        })
      )
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
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

  // CATEGORIA

  findByCategory(req, res) {
    let categoria = req.params.id;
    ProductModel.find({ categoria })
      .then((categoria) => res.send(categoria))
      .catch((err) => res.send(err));
  },

  // CHEQUEAR COMILLAS
  findBySearch(req, res) {
    let search = req.params.value;
    ProductModel.find({ nombre: { $regex: search, $options: "i" } })
      .then((productos) => res.send(productos))
      .catch((err) => res.send(err));
  },
};

module.exports = productController;
