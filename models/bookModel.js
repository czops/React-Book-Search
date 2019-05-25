var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
  });


// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the User model
module.exports = Book;
