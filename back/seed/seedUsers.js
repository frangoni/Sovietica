const Users = require("../models/User");
require("../db/db");

const Santi = {
  nombre: "Santi",
  apellido: "Montalvo",
  email:"email@lala.com",
  direccion:"calle falsa 123",
  clave:"123",
  telefono:"1234",
  rol:"Admin",
};

const Pili = {
  nombre: "Pili",
  apellido: "Fernandez",
  email:"email@lala.com",
  direccion:"calle falsa 123",
  clave:"123",
  telefono:"1234",
  rol:"Admin",
};

const Chino = {
  nombre: "Chris",
  apellido: "Chen",
  email:"email@lala.com",
  direccion:"calle falsa 123",
  clave:"123",
  telefono:"1234",
  rol:"Admin",
};


Users.insertMany([Santi, Pili, Chino]).then(() => {
  console.log("-----corrio el seed de Users ------")
  process.exit();
});
