//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");
const CategoryModel = require("../models/Category");
const StockModel = require("../models/Stock");

const adminController = {
  // TRAER TODOS LOS USUARIOS
  findAll(req,res) {
    UserModel.find()
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },

  // CAMBIAR EL ROL DE LOS USUARIOS
  updateUser(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, { rol: req.body.rol })
      .then(() => {
        return UserModel.find();
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  // ELIMINAR USUARIOS
  deleteUser(req, res) {
    UserModel.findByIdAndDelete(req.params.id)
      .then(() => {
        return UserModel.find();
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  findProducts(req,res) {
    ProductModel.find()
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  createProducts(req, res) {
    ProductModel.create(req.body)
    .then((product) => res.send(product))
    .catch((err) => res.send(err));
  },

  createStock(req,res) {
    StockModel.create(req.body)
    .then((stockProduct) => res.send(stockProduct))
    .catch((err) => res.send(err));
  },

  findStock(req,res) {
    StockModel.find().populate("productos")
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
};

module.exports = adminController;
