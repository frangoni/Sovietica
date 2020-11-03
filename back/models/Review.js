const mongoose = require("mongoose")
const Schema = mongoose.Schema

let reviewSchema = new Schema ({
    review:{
        type : String,
        required: true
    },
    calificacion:{
      type: Number,
      required: true
    },
    usuario:[{
      type: Schema.Types.ObjectId,
      ref: "Users"
    }],
    productos:[{
      type: Schema.Types.ObjectId,
      ref: "Products"
    }]
})

const Review = mongoose.model("Reviews" , reviewSchema)
module.exports = Review