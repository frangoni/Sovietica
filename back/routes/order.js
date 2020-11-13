//       /order
const express = require("express")

const router = express.Router()
const orderControllers = require("../controllers/order")

router.get("/" , orderControllers.findAll)
router.post("/" , orderControllers.createOrder)
router.get("/admin", orderControllers.findAll)
router.put("/admin/:id", orderControllers.updateOrder)

module.exports = router








