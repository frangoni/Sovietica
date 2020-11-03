const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pokemon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});