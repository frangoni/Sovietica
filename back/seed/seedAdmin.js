const User = require('../models/User');
require('../db/db');

const Pili = {
  nombre: 'Pili',
  apellido: 'Fernandez',
  email: 'sovieticaindumentaria@gmail.com',
  direccion: 'Lerma 581, Villa Crespo',
  clave: 'sovietica',
  telefono: 1134516914,
  rol: 'admin',
};

const PiliAdmin = {
  nombre: 'Pili',
  apellido: 'Fernandez',
  email: 'pf@pf.com',
  direccion: 'Lerma 581, Villa Crespo',
  clave: 'sovietica',
  telefono: 1134516914,
  rol: 'admin',
};

User.create([Pili, PiliAdmin]).then(() => {
  console.log('------- corrio el seed User ------');
  process.exit();
});
