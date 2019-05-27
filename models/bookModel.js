var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Object, required: true },
    description: { type: String, required: true},
    date: { type: Date, default: Date.now },
    image: { type: String, required: true},
    link: {type: String, required: true}
  });


// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the User model
module.exports = Book;
