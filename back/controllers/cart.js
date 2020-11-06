const UserModel = require("../models/User")
const CartModel = require("../models/Cart")
const StockModel = require("../models/Stock")

const cartController = {
// ENCONTRAR CARRITO DE USUARIO
    findOne(req,res) {
       UserModel.findById(req.user.id)
        .then(user =>{
            CartModel.find({usuarios : user._id})
            .populate("productos")
        }) 
        .then(userCart => res.send(userCart))
        .catch(err => res.send(err))
    },
    
// AGREGAR PRODUCTO AL CARRITO
    createCart(req,res) {
        StockModel.findOne({
            productos : req.params.idProduct,
            talle : req.body.talle,
            color : req.body.color
        })
        .then(product=>{
            CartModel.create({
                usuarios : req.user.id,
                productos : product._id
            })
        })
        .then(newProduct => res.send(newProduct))
        .catch(err => res.status(500).send(err))        
    },


//UPDATEAR CANTIDAD DE PRODUCTO
    updateCart(req,res) {
        CartModel.findByIdAndUpdate(
            req.params.idProduct, 
            { cantidad : req.body }, 
            { overwrite: true })
            .then(updatedProduct => res.status(200).send("Producto modificado"))
            .catch(err => res.status(500).send(err))
    },

// ELIMINAR PRODUCTO (ENVIAR POR PARAMS ID DE PRODUCTO EN EL CARRITO)
    deleteCart(req,res) {
        CartModel.findByIdAndDelete(req.params.idProduct)
            .then(product => res.status(204).send("Producto eliminado"))
            .catch(err => res.status(500).send(err))
    
    },
}

module.exports = cartController


