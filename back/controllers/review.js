//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const ReviewModel = require("../models/User");

const reviewController = {
  addReview(req, res) {
    let usuario = req.user.id;
    let producto = req.params.id;
    let data = Object.assign(req.body, { usuario }, { producto });
    console.log(data);
    ReviewModel.create(data)
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },

  getReviews(req, res) {
    let producto = req.params.id;
    ReviewModel.find({ producto })
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
  getReviewsXUser(req, res) {
    let producto = req.params.id;
    ReviewModel.find({ producto, usuario: req.user.id })
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
};

module.exports = reviewController;
