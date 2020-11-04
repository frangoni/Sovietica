const express = require("express");
const router = express.Router();
const productsRouter = require("../routes/products");
const reviewRouter = require("../routes/review");
const cartRouter = require("../routes/cart")
const orderRouter = require("../routes/order")
const userRouter= require("../routes/user")

router.use("/products", productsRouter);
router.use("/review", reviewRouter);
router.use("/cart" , cartRouter)
router.use("/order" , orderRouter)
router.use("/user" , userRouter)

module.exports = router;

