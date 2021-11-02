const mongoose = require("../database");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
