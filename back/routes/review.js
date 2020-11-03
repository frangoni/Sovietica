//                                                                                                        /review
const express = require("express");
const router = express.Router;
const reviewController = require("../controllers/review");

router.post("/:id", reviewController.addReview);
router.get("/:id", reviewController.getReviews);

module.exports = router;
