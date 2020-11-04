const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sovietica", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => console.log(err))


// CHEQUEAR QUE HACE ESTOOOO!!

// const db = mongoose.connection;