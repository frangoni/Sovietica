const OrderModel = require("../models/Order");
const CartModel = require("../models/Cart");
const nodemailer = require("nodemailer");

const orderControllers = {
  //MUESTRA LAS ORDENES DEL USUARIO
  findAll(req, res) {
    OrderModel.find({ usuarios: req.user.id })
      .populate({
        path: "productos",
        populate: { path: "productos" },
      })
      .then((orders) => res.status(200).send(orders))
      .catch((err) => res.status(500).send(err));
  },
  //CREA ORDEN LUEGO DE CONFIRMAR LA COMPRA
  createOrder(req, res) {
    CartModel.find({ usuarios: req.user.id })
      .then((cart) => {
        let orderProducts = [];
        for (let i = 0; i < cart.length; i++) {
          orderProducts.push(cart[i].productos);
        }
        return orderProducts;
      })
      .then((orderProducts) => {
        OrderModel.create({
          total: req.body.total,
          direccion: req.body.direccion,
          usuarios: req.user.id,
          productos: orderProducts,
        });
      })
      .then(() => {
        CartModel.deleteMany({ usuarios: req.user.id });
      })
      .then(() => {
        const transporter = nodemailer.createTransport({
          host: "localhost",
          port: 1025,
          auth: {
            user: "project.1",
            pass: "secret.1",
          },
        });

        const mailOptions = {
          from: "sovieticaindumentaria@gmail.com",
          to: req.body.email,
          subject: "SOVIETICA",
          text: "Gracias por su compra, vuelva pronto!",
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: ");
          }
          res.status(200).send("Orden creada");
        });
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = orderControllers;
