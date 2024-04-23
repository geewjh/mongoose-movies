//Add and code the controller action/function to perform any necessary CRUD, etc. and be sure to export it.

const Movie = require("../models/movie");

async function create(req, res) {
  try {
    const movieDetails = req.body; //when you send a http request, you send it as a json body
    const movie = await Movie.create(movieDetails); //using the create method from mongoose or from the model to create the movieDetails in your db.

    return res.status(201).json(movie); //after it has been created, send the created movie variable to the front-end with the specific status
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

async function findByRating(req, res) {
  try {
    const { rating } = req.params;
    const movies = await Movie.find({
      mpaaRating: rating,
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

async function findAll(req, res) {
  try {
    const movies = await Movie.find({});
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  create,
  findByRating,
  findAll,
};
