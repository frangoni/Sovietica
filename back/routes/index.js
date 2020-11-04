const express = require("express");
const router = express.Router();
const productsRouter = require("../routes/products");
const reviewRouter = require("../routes/review");
const cartRouter = require("../routes/cart")
const orderRouter = require("../routes/order")


router.use("/products", productsRouter);
router.use("/review", reviewRouter);
router.use("/cart" , cartRouter)
router.use("/order" , orderRouter)


module.exports = router;

