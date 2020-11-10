// admin
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/users", adminController.findAll);
router.put("/users/:id", adminController.updateUser);
router.delete("/users/:id", adminController.deleteUser);


module.exports = router;
