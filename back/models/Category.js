const mongoose = require("mongoose")
const Schema = mongoose.Schema

let categorySchema = new Schema ({
    nombre:{
        type : String,
        required: true
    },
    foto: {
        type: String, 
        url: "",
      },
})

const Category = mongoose.model("Categories" , categorySchema)
module.exports = Category