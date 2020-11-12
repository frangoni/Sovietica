//       /order
const express = require("express")
const router = express.Router()
const orderControllers = require("../controllers/order")

router.get("/" , orderControllers.findAll)
router.post("/" , orderControllers.createOrder)

module.exports = router








