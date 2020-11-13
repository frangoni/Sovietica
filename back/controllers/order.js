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
    // BUSCA EN EL CARRITO AQUELLOS QUE SEA DEL USUARIO
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

// ENVIA EL MAIL
      .then(() => {
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "sovietica.2020@gmail.com",
            pass: "Plataforma5#",
          },
        });

        const mailOptions = {
          from: "sovietica.2020@gmail.com",
          to: "chenchristian7@gmail.com", //req.user.email
          subject: `GRACIAS POR TU COMPRA ${req.user.nombre}!`,
          html: '<img src="https://cdn.discordapp.com/attachments/763879090729779211/776593090525659136/GRACIAS_POR_TU_COMPRA.jpg"/>',
          attachments: [
            {
              filename: "image.png",
              cid: "https://cdn.discordapp.com/attachments/763879090729779211/776593090525659136/GRACIAS_POR_TU_COMPRA.jpg", 
              //same cid value as in the html img src
            },
          ],
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("----- Email enviadoo ----- ");
          }
        });
      })

      // ELIMINA TODO EL CARRITO DEL USUARIO
      .then(() => {
        return CartModel.deleteMany({ usuarios: req.user.id });
      })
      .then(() => res.status(200).send("Orden creada"))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = orderControllers;
