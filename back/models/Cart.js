const mongoose = require("mongoose")
const Schema = mongoose.Schema

let cartSchema = new Schema ({
    cantidad:{
      type: Number,
      required: true
    },
    usuarios:[{
      type: Schema.Types.ObjectId,
      ref: "Users"
    }],
    productos:[{
      type: Schema.Types.ObjectId,
      ref: "Stock"
    }]
})

const Cart = mongoose.model("Carts" , cartSchema)
module.exports = Cart