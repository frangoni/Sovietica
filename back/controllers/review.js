//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const ReviewModel = require("../models/user");

const reviewController = {
  addReview(req, res) {
    let user = req.user.id;
    let product = req.params.id;
    let data = Object.assign(req.body, { user }, { product });
    ReviewModel.create(data);
  },
};

module.exports = reviewController;
