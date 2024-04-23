//whatever that is related to mongoose connection will be stored here
const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.set("debug", true);

mongoose.connect(process.env.DATABASE_URL);

//event listener to show that you've successfully connected to mongoDB
db.on("connected", function () {
  console.log(`Connected to MongoDB`);
});
