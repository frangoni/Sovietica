const Category = require("../models/Category");
require("../db/db");

const jean = {
  nombre: "jean",
  imagen: "",
};

const camisas = {
  nombre: "camisas",
  imagen: "",
};

const camperas= {
  nombre: "camperas",
  imagen: "",
};


Category.insertMany([jean, camisas, camperas]).then(() => {
  console.log("corrio el seed Category ------")
  process.exit();
});
