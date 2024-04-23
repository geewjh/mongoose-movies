const Movie = require("../models/movie");

async function addReview(req, res) {
  const { id } = req.params;

  const movie = await Movie.findById(id);
  movie.reviews.push(req.body);
  const updatedMovie = await movie.save(); //you have to save because when you push the reviews, it is still living within your code

  res.status(200).json(updatedMovie);
}

async function updateYear(req, res) {
  const { id, year } = req.params;
  const movie = await Movie.findByIdAndUpdate(id, {
    releaseYear: year,
  }); //take note for the function findByIdAndUpdate, it doesn't return the updated json document but rather the original one. Need to include returnOriginal: false

  res.status(200).json(movie);
}

module.exports = {
  addReview,
  updateYear,
};
