const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
    url: "",
  },
  descripcion: {
    type: String,
  },
  // talle: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Stocks",
  //   },
  // ],
  // color: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Stocks",
  //   },
  // ],
  categoria: [
    {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
  ],
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
