//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const UserModel = require("../models/User");

const adminController = {
  // TRAER TODOS LOS USUARIOS
  findAll(req,res) {
    UserModel.find()
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },

  // CAMBIAR EL ROL DE LOS USUARIOS
  updateUser(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, { rol: req.body.rol })
      .then(() => {
        return UserModel.find();
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },

  // ELIMINAR USUARIOS
  deleteUser(req, res) {
    UserModel.findByIdAndDelete(req.params.id)
      .then(() => {
        return UserModel.find();
      })
      .then((user) => res.status(200).send(user))
      .catch((err) => res.send(err));
  },
};

module.exports = adminController;
