const Cart = require("../models/Cart");
require("../db/db");

const uno = {
  cantidad: 1,
  usuarios: "5fa1d8e7699b92e54be785c5",
  productos: "5fa1d8df50284de532584519",
};

const dos = {
  cantidad: 1,
  usuarios: "5fa1d8e7699b92e54be785c5",
  productos: "5fa1d8df50284de53258451a",
};

const tres = {
  cantidad: 1,
  usuarios: "5fa1d8e7699b92e54be785c5",
  productos: "5fa1d8df50284de53258451b",
};

Cart.insertMany([uno, dos, tres]).then(() => {
  console.log("corrio el seed Cart ------");
  process.exit();
});