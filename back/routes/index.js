const express = require("express");
const router = express.Router();
const productsRouter = require("./products");
const reviewRouter = require("./review");
const userRouter = require("./user")

router.use("/products", productsRouter);
router.use("/review", reviewRouter);
router.use("/user");

module.exports = router;
