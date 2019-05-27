const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// const routes = require(" ./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});







// // Our newest addition to the dependency family
// var mongoose = require("mongoose");

// // Requiring the `Example` model for accessing the `examples` collection
// var Example = require("./exampleModel.js");

// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/schemaexample", { useNewUrlParser: true });

// // Create an object containing dummy data to save to the database
// var data = {
//   array: ["item1", "item2", "item3"],
//   boolean: false,
//   string:
//     "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
//   number: 42
// };

// // Save a new Example using the data object
// Example.create(data)
//   .then(function(dbExample) {
//     // If saved successfully, print the new Example document to the console
//     console.log(dbExample);
//   })
//   .catch(function(err) {
//     // If an error occurs, log the error message
//     console.log(err.message);
//   });