const OrderModel = require("../models/Order")
const CartModel = require("../models/Cart")

const orderControllers = {
//MUESTRA LAS ORDENES DEL USUARIO
    findAll(req,res){
        OrderModel.find({ usuarios : req.user.id })
        .populate("productos")
        .then(orders => res.status(200).send("Ordenes del usuario" , orders))
        .catch(err=> res.status(500).send(err))
    },
//CREA ORDEN LUEGO DE CONFIRMAR LA COMPRA
    createOrder(req,res) {
        CartModel.find({ usuarios : req.user.id })
        .then(cart =>{
            let orderProducts = []
            for(let i = 0 ; i< cart.length ; i++){
                orderProducts.push(cart[i].productos)
            }
            return orderProducts
        })
        .then(orderProducts =>{
            OrderModel.create({
                total : req.body.total,
                direccion : req.body.direccion,
                usuarios : req.user.id,
                productos : orderProducts
            })
        })
        .then(()=>{
            CartModel.deleteMany({ usuarios : req.user.id })
        })
        .then(()=> res.status(200).send("Orden creada"))
        .catch(err => res.status(500).send(err))
    }
}

module.exports = orderControllers