const Products = require("../models/Product");
require("../db/db");

const Camisa = {
  nombre: "Camisa Tina",
  precio: 2500,
  descripcion:
    "Corte oversize, manga larga. Tela: Poplin de algodon blanco con spandex. Lavado: Suavizado",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/whatsapp-image-2020-10-13-at-15-18-1111-b83924276bc27214bd16026222422487-1024-1024.jpeg",
};

const Campera = {
  nombre: "Campera Alex",
  precio: 2900,
  descripcion:
    "Campera rompeviento. Corte Oversize, Unisex. Tela: Semi-impermeable. Forrada con mesh (red)",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/dsc_10771-ee94b89daf6e9a431915998867326418-1024-1024.jpg",
};

const Jean = {
  nombre: "Jean Mom Silma",
  precio: 2600,
  descripcion:
    "5 bolsillos, ajustado en la cintura, relajado desde la cadera hasta el tobillo, bota semi ajustada. La tela es 99% algodon 1% elastano. Tiene muy poca elasticidad, la tela es super suave, logrando un calce muy comodo para todos los dias. El lavado es azul oscuro, con hilos color ocre para lograr un aspecto vintage.",
  foto: "https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/img_3535-21-cd8beb5fbe3c1e1db115989991604044-1024-1024.jpg",
  categoria:{_id: "5fa1b4387e8dca254050d764"}
  //en las rutas populate para ver el nombre
};


Products.insertMany([Camisa, Campera, Jean,]).then(() => {
  console.log("-----corrio el seed Products------")
  process.exit();
});
