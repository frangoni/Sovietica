const Category = require("../models/Category");
require("../db/db");



const jean = {
  nombre: "jean",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/img_3535-21-cd8beb5fbe3c1e1db115989991604044-240-0.jpg",
};

const camisas = {
  nombre: "camisas",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/whatsapp-image-2020-10-13-at-15-18-1111-b83924276bc27214bd16026222422487-1024-1024.jpeg",
};

const camperas= {
  nombre: "camperas",
  foto: "https://lh3.googleusercontent.com/_DrKahMAaGJf079-Kc_a8oUfnnLpm6bIlax1rFPeZjvjwCTbTSi4T8fA6swr3iOA8cxY3Lp6BBzR1Q3eLsMJ=w1435-h766-rw",
};


// https://lh3.google.com/u/0/d/13vs6WHpwvIy_m4tvDZqSTxuOVEuBbJOH=w1435-h766-iv2


Category.insertMany([jean, camisas, camperas]).then(() => {
  console.log("corrio el seed Category ------")
  process.exit();
});
