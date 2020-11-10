// admin
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/users", adminController.findAll);
router.put("/users/:id", adminController.updateUser);
router.delete("/users/:id", adminController.deleteUser);
router.get("/products" , adminController.findProducts)
router.get("/stock" , adminController.findStock)
router.post("/products" , adminController.createProducts)
router.post("/stock" , adminController.createStock)
module.exports = router;
