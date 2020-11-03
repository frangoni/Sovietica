//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const ReviewModel = require("../models/User");

const reviewController = {
  addReview(req, res) {
    let usuario = req.user.id;
    let productos = req.params.id;
    let data = Object.assign(req.body, { usuario }, { productos });
    ReviewModel.create(data)
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  getReviews(req, res) {
    let productos = req.params.id;
    ReviewModel.find({ productos })
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
};

module.exports = reviewController;
