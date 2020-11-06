const mongoose = require("mongoose")
const Schema = mongoose.Schema

let cartSchema = new Schema ({
    cantidad:{
      type: Number,
      default : 1
    },
    usuarios:[{
      type: Schema.Types.ObjectId,
      ref: "Users"
    }],
    productos:[{
      type: Schema.Types.ObjectId,
      ref: "Stocks"
    }]
})

const Cart = mongoose.model("Carts" , cartSchema)
module.exports = Cart