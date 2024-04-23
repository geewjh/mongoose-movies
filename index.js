const express = require("express");
require("dotenv").config();
require("./config/database"); //this is asynchronous that's why you will notice "listening to port" returns first in the terminal

const moviesRouter = require("./routes/movies");

const port = process.env.PORT || 4050;
const app = express();

app.use(express.json()); //in this mongoose context, you need to include this to process the data in the body if it's json for your controller.

app.use("/api/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Listening to port : ${port}`);
});
