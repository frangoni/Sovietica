const Category = require('../models/Category');
const Products = require('../models/Product');
require('../db/db');

const jean = {
  nombre: 'JEANS',
  foto: 'https://www.osainajeans.com.ar/9261-home_default/jean-alis-9339-corsario-nevado-oscuro-acabado-recortado.jpg',
};

const camisas = {
  nombre: 'CAMISAS',
  foto: 'https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/whatsapp-image-2020-10-13-at-15-18-1111-b83924276bc27214bd16026222422487-1024-1024.jpeg',
};

const camperas = {
  nombre: 'CAMPERAS',
  foto: 'https://i.pinimg.com/originals/22/81/22/228122fc8cf6d2f046e7f6138dd83853.jpg',
};

const remeras = {
  nombre: 'REMERAS',
  foto: 'http://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-03811-00a1fdff4e2b7c4c7a15725315387588-1024-1024.jpg',
};

const tops = {
  nombre: 'TOPS',
  foto: 'https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-02271-fa7d927825aa2e3d9815725305274972-1024-1024.jpg',
};

const Camisa = {
  nombre: 'Camisa Tina',
  precio: 2500,
  descripcion: 'Corte oversize, manga larga. Tela: Poplin de algodon blanco con spandex. Lavado: Suavizado',
  foto: 'https://d26lpennugtm8s.cloudfront.net/stores/903/961/products/whatsapp-image-2020-10-13-at-15-18-1111-b83924276bc27214bd16026222422487-1024-1024.jpeg',
};

const Campera = {
  nombre: 'Campera Alex',
  precio: 2900,
  descripcion: 'Campera rompeviento. Corte Oversize, Unisex. Tela: Semi-impermeable. Forrada con mesh (red)',
  foto: 'https://i.pinimg.com/originals/22/81/22/228122fc8cf6d2f046e7f6138dd83853.jpg',
};

const Jean = {
  nombre: 'Jean Mom Silma',
  precio: 2600,
  descripcion:
    '5 bolsillos, ajustado en la cintura, relajado desde la cadera hasta el tobillo, bota semi ajustada. La tela es 99% algodon 1% elastano. Tiene muy poca elasticidad, la tela es super suave, logrando un calce muy comodo para todos los dias. El lavado es azul oscuro, con hilos color ocre para lograr un aspecto vintage.',
  foto: 'https://www.osainajeans.com.ar/9261-home_default/jean-alis-9339-corsario-nevado-oscuro-acabado-recortado.jpg',
};

const VestidoCora = {
  nombre: 'Vestido Cora',
  precio: 1700,
  descripcion: 'Vestido manga corta con bolsillos. Elastico en la cintura. Tela: fibrana con viscosa estampada',
  foto: 'http://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-05431-86a059ace565cb251215725324800588-240-0.jpg',
};

const RemeraPiper = {
  nombre: 'Remera Piper',
  precio: 900,
  descripcion: 'Remeron unisex.Estampa: serigrafia.Manga corta, escote redondo.Tela: Jersey de algodon negro.',
  foto: 'http://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-03811-00a1fdff4e2b7c4c7a15725315387588-1024-1024.jpg',
};

const BlazeBlondie = {
  nombre: 'Blazer Blondie',
  precio: 3000,
  descripcion: "Blazer con hombreras.Bolsillos ojales. Pin metalico 'rayo' incluido.Tela: Lino Gris - Forreria Offwhite",
  foto: 'http://d26lpennugtm8s.cloudfront.net/stores/903/961/products/7f302b56-2e22-4e9b-b0b0-41db29dd25481-ea076ce48740ab6c0015932024155370-1024-1024.jpg',
};

const TopApa = {
  nombre: 'Top Apa',
  precio: 900,
  descripcion: 'Top con breteles.Cartera con botones fijos. Tela: Crep estampado.',
  foto: 'http://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-02271-fa7d927825aa2e3d9815725305274972-1024-1024.jpg',
};

const PantalonApa = {
  nombre: 'Pantalon Apa',
  precio: 1400,
  descripcion: 'Pantalon con elastico en la cintura.Cordon de ajuste y bolsillos delanteros.Tela: Crep estampado',
  foto: 'http://d26lpennugtm8s.cloudfront.net/stores/903/961/products/sov-03181-39c087d85b36f499ae15725307703503-1024-1024.jpg',
};

const JumperJessie = {
  nombre: 'Jumper Jessie',
  precio: 3000,
  descripcion:
    "Tela: Jean 99% algodon 1% elastano. Tiene un lavado azul suave con hilos en color ocre para darle a la prenda un estilo 'vintage'. La tela es muy suave y tiene un poco de espandex, de esta forma la prenda se adapta bien y es muy comoda para el uso diario.Con bolsillos delanteros y cartera con broches de metal. Esta prenda viene desde el talle S al XXL. Tomar las medidas sobre el contorno de busto, cintura y cadera (Ver tabla de talles expresada en centimetros).",
  foto: 'https://i.pinimg.com/originals/be/dd/e2/bedde2c108bff7267c58cadbb3817df7.jpg',
};

const jeansArray = [Jean, PantalonApa];
const camisasArray = [Camisa, JumperJessie];
const camperasArray = [Campera, BlazeBlondie];
const topsArray = [TopApa];
const remerasArray = [VestidoCora, RemeraPiper];

const createJeans = async () => {
  let cat = await Category.create(jean);
  jeansArray.forEach(async (jean) => {
    let created = await Products.create({ ...jean, categoria: cat._id });
    created;
  });
};

const createCamisas = async () => {
  let cat = await Category.create(camisas);
  camisasArray.forEach(async (camisas) => {
    let created = await Products.create({ ...camisas, categoria: cat._id });
    created;
  });
};
const createCamperas = async () => {
  let cat = await Category.create(camperas);
  camperasArray.forEach(async (camperas) => {
    let created = await Products.create({ ...camperas, categoria: cat._id });
    created;
  });
};
const createRemeras = async () => {
  let cat = await Category.create(remeras);
  remerasArray.forEach(async (remeras) => {
    let created = await Products.create({ ...remeras, categoria: cat._id });
    created;
  });
};

const createTops = async () => {
  let cat = await Category.create(tops);
  topsArray.forEach(async (top) => {
    let created = await Products.create({ ...top, categoria: cat._id });
    created;
  });
};

createCamisas();
createCamperas();
createJeans();
createRemeras();
createTops();
console.log('-----corrio el seed Main------ ');
