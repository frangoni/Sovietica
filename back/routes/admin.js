// admin
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// --- ADMINISTRAR USUARIOS
router.get("/users", adminController.findAll);
router.put("/users/:id", adminController.updateUser);
router.delete("/users/:id", adminController.deleteUser);

// --- ADMINISTRAR STOCK
router.get("/stock" , adminController.findStock)
router.post("/stock" , adminController.createStock)
router.put("/stock/:id", adminController.updateStock)
router.delete("/stock/:id", adminController.deleteStock)

// --- ADMINISTRAR PRODUCTOS
router.get("/products" , adminController.findProducts)
router.post("/products" , adminController.createProducts)
router.put("/products/:id", adminController.updateProducts)
router.delete("/products/:id", adminController.deleteProducts)

module.exports = router;
