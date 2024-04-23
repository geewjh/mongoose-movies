const express = require("express");
const router = express.Router();

const moviesCtrl = require("../controllers/movies");
const reviewsCtrl = require("../controllers/review");

// GET /movies/new
// router.get("/new", moviesCtrl.new);
// POST /movies
router.post("/", moviesCtrl.create);
router.post("/:id/reviews", reviewsCtrl.addReview);
router.post("/:id/update-year/:year", reviewsCtrl.updateYear);

router.get("/find", moviesCtrl.findAll);
router.get("/find/:rating", moviesCtrl.findByRating);

module.exports = router;
