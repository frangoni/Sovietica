const mongoose = require("mongoose")
const Schema = mongoose.Schema

let orderSchema = new Schema ({
    estado:{
        type : String,
        required: true,
        default : "En preparacion"
    },
    total:{
      type: Number,
      required: true
    },
    direccion:{
      type : String,
      required: true
    },
    fecha :{
      type : Date,
      default : Date.now
    },
    usuarios:[{
      type: Schema.Types.ObjectId,
      ref: "Users"
    }],
    productos:[{
      type: Schema.Types.ObjectId,
      ref: "Stock"
    }],
   
})

const Order = mongoose.model("Orders" , orderSchema)
module.exports = Order