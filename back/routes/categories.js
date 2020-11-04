//                                                /categories             
const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");

router.get("/", categoriesController.getCategories);
router.post("/", categoriesController.addCategory);
router.delete("/:id", categoriesController.deleteCategory);


module.exports = router;