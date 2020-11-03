//                                                                                                        /review
const express = require("express");
const router = express.Router;
const reviewController = require("../controllers/review");

router.post("/:id", reviewController);

module.exports = router;
