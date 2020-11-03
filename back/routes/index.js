const express = require("express");
const router = express.Router();
const productsRouter = require("../routes/products");
const reviewRouter = require("../routes/review");

router.use("/products", productsRouter);
router.use("/review", reviewRouter);
router.use("/users");

module.exports = router;
