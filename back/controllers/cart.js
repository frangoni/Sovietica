const UserModel = require("../models/User");
const CartModel = require("../models/Cart");
const StockModel = require("../models/Stock");

const cartController = {
  // ENCONTRAR CARRITO DE USUARIO
  findOne(req, res) {
    UserModel.findById(req.user._id)
      .then((user) => {
        return CartModel.find({ usuarios: user._id }).populate({
          path: "productos",
          populate: { path: "productos" },
        });
      })
      .then((userCart) => {
        res.send(userCart);
      })
      .catch((err) => res.send(err));
  },

  // AGREGAR PRODUCTO AL CARRITO
  createCart(req, res) {
    StockModel.findOne({
      productos: req.params.idProduct,
      talle: req.body.talle,
      color: req.body.color,
    })
      .then((product) => {
        CartModel.create({
          usuarios: req.user.id,
          productos: product._id,
          cantidad: req.body.cantidad || 1,
        });
      })
      .then((newProduct) => res.send(newProduct))
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  //UPDATEAR CANTIDAD DE PRODUCTO
  updateCart(req, res) {
    CartModel.findByIdAndUpdate(req.params.idProduct, req.body)
      .then(() => {
        return CartModel.find({ usuarios: req.user._id }).populate({
          path: "productos",
          populate: { path: "productos" },
        });
      })
      .then((all) => {
        res.send(all);
      })
      .catch((err) => res.status(500).send(err));
  },

  // ELIMINAR PRODUCTO (ENVIAR POR PARAMS ID DE PRODUCTO EN EL CARRITO)
  deleteCart(req, res) {
    CartModel.findByIdAndDelete(req.params.idProduct)
      .then(() => {
        return CartModel.find({ usuarios: req.user._id }).populate({
          path: "productos",
          populate: { path: "productos" },
        });
      })
      .then((all) => {
        res.send(all);
      })
      .catch((err) => res.status(500).send(err));
  },

  //RUTAS PARA LOCALSTORAGE
  createLocalCart(req, res) {
    StockModel.findOne({
      productos: req.params.idProduct,
      talle: req.body.talle,
      color: req.body.color,
    })
      .populate("productos")
      .then((producto) => {
        console.log(producto);
        res.send(producto);
      });
  },

  createCartWithLocal(req, res) {
    CartModel.create({
      usuarios: req.user._id,
      productos: product._id,
    });
  },
};

module.exports = cartController;
