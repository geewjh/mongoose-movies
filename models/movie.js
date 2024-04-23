const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

const movieSchema = new Schema(
  {
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

//Models, not schemas are used to perform CRUD on a MongoDB collection.
//Compiling a schema into a model is as easy as calling the mongoose.model method:
//Compile the schema into a model and export it

module.exports = mongoose.model("Movie", movieSchema);
