const Stock = require('../models/Stock');
require('../db/db');

const CamisaL = {
  cantidad: 10,
  talle: 'L',
  color: 'Blanco',
  productos: { _id: '5fa55877ff38764c3b04f417' },
};

const CamisaTinaL = {
  cantidad: 10,
  talle: 'L',
  color: 'Blanco',
  productos: { _id: '5faad019fea3d7851b25f46c' },
};
const CamisaTinaM = {
  cantidad: 10,
  talle: 'M',
  color: 'Roja',
  productos: { _id: '5faad019fea3d7851b25f46c' },
};
const CamisaTinaXL = {
  cantidad: 10,
  talle: 'XL',
  color: 'Negra',
  productos: { _id: '5faad019fea3d7851b25f46c' },
};

const CamisaM = {
  cantidad: 5,
  talle: 'M',
  color: 'Blanco',
  productos: { _id: '5fa55877ff38764c3b04f417' },
};

const CamisaS = {
  cantidad: 8,
  talle: 'S',
  color: 'Blanco',
  productos: { _id: '5fa55877ff38764c3b04f417' },
};

const CamperaS = {
  cantidad: 20,
  talle: 'S',
  color: 'Azul',
  productos: { _id: '5faad019fea3d7851b25f46d' },
};

const CamperaM = {
  cantidad: 10,
  talle: 'M',
  color: 'Azul',
  productos: { _id: '5faad019fea3d7851b25f46d' },
};

const CamperaL = {
  cantidad: 10,
  talle: 'L',
  color: 'Azul',
  productos: { _id: '5faad019fea3d7851b25f46d' },
};

const JeanS = {
  cantidad: 10,
  talle: 'S',
  color: 'Azul',
  productos: { _id: '5faad019fea3d7851b25f46e' },
};

const JeanM = {
  cantidad: 10,
  talle: 'M',
  color: 'Azul',
  productos: { _id: '5faad019fea3d7851b25f46e' },
};

const JeanL = {
  cantidad: 0,
  talle: 'L',
  color: 'Azul',
  productos: { _id: '5faad019fea3d7851b25f46e' },
};

const VestidoCoraS = {
  cantidad: 10,
  talle: 'S',
  color: 'Negro',
  productos: { _id: '5fa55877ff38764c3b04f41a' },
};

const VestidoCoraM = {
  cantidad: 10,
  talle: 'M',
  color: 'Negro',
  productos: { _id: '5fa55877ff38764c3b04f41a' },
};

const VestidoCoraL = {
  cantidad: 0,
  talle: 'L',
  color: 'Negro',
  productos: { _id: '5fa55877ff38764c3b04f41a' },
};

Stock.insertMany([
  CamisaL,
  CamperaS,
  CamperaM,
  CamperaL,
  JeanS,
  JeanM,
  JeanL,
  VestidoCoraS,
  VestidoCoraM,
  VestidoCoraL,
  CamisaS,
  CamisaM,
  CamisaTinaM,
  CamisaTinaL,
  CamisaTinaXL,
]).then(() => {
  console.log('-----corrio el seed Stocks------');
  process.exit();
});
