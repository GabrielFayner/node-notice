const mongoose = require("../database");

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  post: {
    type: String,
    require: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Notice = mongoose.model("Notice", NoticeSchema);
module.exports = Notice;
