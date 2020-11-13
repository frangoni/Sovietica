//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");
const CategoryModel = require("../models/Category");
const StockModel = require("../models/Stock");

const adminController = {
  // ------- ADMINISTRAR PRODUCTOS ---------

  // 1. TRAER TODOS LOS USUARIOS
  findAll(req, res) {
    UserModel.find()
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },

  // 2. CAMBIAR EL ROL DE LOS USUARIOS
  updateUser(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, { rol: req.body.rol })
      .then(() => {
        return UserModel.find();
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  // 3. ELIMINAR USUARIOS
  deleteUser(req, res) {
    UserModel.findByIdAndDelete(req.params.id)
      .then(() => {
        return UserModel.find();
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  // ------- ADMINISTRAR PRODUCTOS ---------

  // 1. BUSCA TODOS LOS PRODUCTOS
  findProducts(req, res) {
    ProductModel.find()
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  // 2. CREA UN PRODUCTO
  createProducts(req, res) {
    ProductModel.create(req.body)
      .then((product) => res.send(product))
      .catch((err) => res.send(err));
  },

  // 3. ELIMINAR PRODUCTO
  deleteProducts(req, res) {
    StockModel.deleteMany({productos:req.params.id})
    .then(()=>{
      console.log("las zucaritas de beto")
      return ProductModel.findByIdAndDelete(req.params.id) 
    })
      .then(() => {
        return ProductModel.find().populate("categoria")
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },
  

  // 4. UPDATE PRODUCTS
  updateProducts(req, res) {
    ProductModel.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        return ProductModel.find().populate("categoria");
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  // ------- ADMINISTRAR STOCK ---------

  // 1.  BUSCA DESDE EL STOCK
  findStock(req, res) {
    StockModel.find()
      .populate("productos")
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  // 2. CREA STOCK DE UN PRODUCTO
  createStock(req, res) {
    StockModel.create(req.body)
      .then((stockProduct) => res.send(stockProduct))
      .catch((err) => res.send(err));
  },

  // 3. ELIMINAR STOCK
  deleteStock(req, res) {
    StockModel.findByIdAndDelete(req.params.id)
      .then(() => {
        return StockModel.find().populate("productos");
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  // 4. MODIFICAR STOCK
  updateStock(req, res) {
    console.log("---esto es req body ----", req.body);
    StockModel.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        return StockModel.find().populate("productos");
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },
};

module.exports = adminController;


