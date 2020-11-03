const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sovietica", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// CHEQUEAR QUE HACE ESTOOOO!!

// const db = mongoose.connection;