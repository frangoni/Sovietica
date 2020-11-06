const Stock = require("../models/Stock");
require("../db/db");

const CamisaL = {
  cantidad: 10,
  talle: "L" ,
  color: "Blanco",
  productos:  {_id: "5fa55877ff38764c3b04f417"}, 
  
};

const CamisaM = {
  cantidad: 5,
  talle: "M" ,
  color: "Blanco",
  productos: {_id: "5fa55877ff38764c3b04f417"}, 
};

const CamisaS = {
  cantidad: 8,
  talle: "S" ,
  color: "Blanco",
  productos: {_id: "5fa55877ff38764c3b04f417"}, 
};

const CamperaS = {
  cantidad: 20,
  talle: "S" ,
  color: "Azul",
  productos: {_id: "5fa55877ff38764c3b04f418"}, 
};

const CamperaM = {
  cantidad: 10,
  talle: "M" ,
  color: "Azul",
  productos: {_id: "5fa55877ff38764c3b04f418"}, 
};

const CamperaL = {
  cantidad: 10,
  talle: "L" ,
  color: "Azul",
  productos: {_id: "5fa55877ff38764c3b04f418"}, 
};

const JeanS = {
  cantidad: 10,
  talle: "S" ,
  color: "Azul",
  productos: {_id: "5fa55877ff38764c3b04f419"}, 
};

const JeanM = {
  cantidad: 10,
  talle: "M" ,
  color: "Azul",
  productos: {_id: "5fa55877ff38764c3b04f419"}, 
};

const JeanL = {
  cantidad: 0,
  talle: "L" ,
  color: "Azul",
  productos: {_id: "5fa55877ff38764c3b04f419"}, 
};

const VestidoCoraS = {
  cantidad: 10,
  talle: "S",
  color: "Negro",
  productos: {_id: "5fa55877ff38764c3b04f41a"}, 
};


const VestidoCoraM = {
  cantidad: 10,
  talle: "M",
  color: "Negro",
  productos: {_id: "5fa55877ff38764c3b04f41a"}, 
};

const VestidoCoraL = {
  cantidad: 0,
  talle: "L",
  color: "Negro",
  productos: {_id: "5fa55877ff38764c3b04f41a"}, 
};


Stock.insertMany([CamisaL,CamperaS, CamperaM, CamperaL, JeanS, JeanM, JeanL,VestidoCoraS,VestidoCoraM, VestidoCoraL,CamisaS, CamisaM, ]).then(() => {
  console.log("-----corrio el seed Products------")
  process.exit();
});

