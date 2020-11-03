const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let stockSchema = new Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  talle: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  productos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

const Stock = moogoose.model("Stocks", stockSchema);
module.exports = Stock;
