const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
  },
  direccion: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  rol: {
    type: String,
    default : "user",
  },
  salt: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  let user = this;
  if (!user.isModified("clave")) return next();

  // generando Salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    user.salt = salt

    bcrypt.hash(user.clave, salt, function (err, hash) {
      if (err) return next(err);

      user.clave = hash;
      next();
    });
  });
});

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return cb(err);
//       cb(null, isMatch);
//   });
// };

const User = mongoose.model("Users", userSchema);
module.exports = User;
