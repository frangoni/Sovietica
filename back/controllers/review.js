//REQUERIR MODELO DE MODELS CUANDO ESTE HECHO
const ReviewModel = require("../models/user");


const reviewController = {
  addReview(req, res) {
    let usuario = req.user.id;
    let producto = req.params.id;
    let data = Object.assign(req.body, { usuario }, { producto });
    ReviewModel.create(data)
    .then((all) => res.send(all))
    .catch((err)=> res.send(err))
  },

  getReviews(req,res) {
    let producto = req.params.id 
    ReviewModel.find({producto})
    .then((all) => res.send(all))
    .catch((err)=> res.send(err))
  }
};

module.exports = reviewController;
