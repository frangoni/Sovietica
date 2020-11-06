const StockModel = require("../models/Stock");

const stockController = {
  getStock(req, res) {
    let producto = req.params.id;
    StockModel.find({productos: producto})
      .then((all) => res.send(all))
      .catch((err) => res.send(err));
  },
};

module.exports = stockController;