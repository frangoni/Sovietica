//                                                                                                        /product
const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

// producto de determinada categoria

router.get("/category/:categoryId", productController.findByCategory);
router.get("/search/:value", productController.findBySearch);

module.exports = router;
