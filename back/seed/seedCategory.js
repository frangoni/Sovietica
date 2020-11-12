const Category = require("../models/Category");
require("../db/db");



const jean = {
  nombre: "JEANS",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/img_3535-21-cd8beb5fbe3c1e1db115989991604044-240-0.jpg",
};

const camisas = {
  nombre: "CAMISAS",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/whatsapp-image-2020-10-13-at-15-18-1111-b83924276bc27214bd16026222422487-1024-1024.jpeg",
};

const camperas= {
  nombre: "CAMPERAS",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/whatsapp-image-2019-11-23-at-12-11-011-f08222fc85997a19ea15994978268704-1024-1024.jpeg",
};


const remeras= {
  nombre: "REMERAS",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-03261-a3affa62b4739e218c15779747897802-1024-1024.jpg",
};

const tops= {
  nombre: "TOPS",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-02271-fa7d927825aa2e3d9815725305274972-1024-1024.jpg",
}; 

// https://lh3.google.com/u/0/d/13vs6WHpwvIy_m4tvDZqSTxuOVEuBbJOH=w1435-h766-iv2


Category.insertMany([jean, camisas, camperas, tops, remeras]).then(() => {
  console.log("corrio el seed Category ------")
  process.exit();
});
