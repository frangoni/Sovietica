const express = require("express");
const router = express.Router();
const productsRouter = require("../routes/products");
const reviewRouter = require("../routes/review");
const cartRouter = require("../routes/cart")
const orderRouter = require("../routes/order")
const userRouter= require("../routes/user")
const categoriesRouter= require("../routes/categories")
const stockRouter = require("../routes/stock")
const adminRouter = require("../routes/admin")

router.use("/products", productsRouter);
router.use("/review", reviewRouter);
router.use("/cart" , cartRouter)
router.use("/order" , orderRouter)
router.use("/user" , userRouter)
router.use("/categories", categoriesRouter)
router.use("/stock", stockRouter)
router.use("/admin", adminRouter)

module.exports = router;

