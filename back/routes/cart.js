const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cart")


router.get("/", cartController.findOne)
router.post("/:idProduct" , cartController.createCart)
router.put("/:idProduct" , cartController.updateCart)
router.delete("/:idProduct" , cartController.deleteCart)

module.exports = router