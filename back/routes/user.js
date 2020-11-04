//                                                                                                        /user
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const passport = require("passport")

router.post("/register", userController.register);
router.post("/login", passport.authenticate(["local","facebook","google"]), userController.login);
router.post("/logout", userController.logout);

// persistencia
router.get("/me", userController.me)

//admin

router.post("/admin", userController.admin)


module.exports = router;