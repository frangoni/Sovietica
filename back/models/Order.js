const mongoose = require("mongoose")
const Schema = mongoose.Schema

let orderSchema = new Schema ({
    estado:{
        type : String,
        required: true
    },
    total:{
      type: Number,
      required: true
    },
    direccion:{
      type : String,
      required: true
  },
    usuarios:[{
      type: Schema.Types.ObjectId,
      ref: "Users"
    }],
    productos:[{
      type: Schema.Types.ObjectId,
      ref: "Products"
    }],
   
})

const Order = mongoose.model("Orders" , orderSchema)
module.exports = Order