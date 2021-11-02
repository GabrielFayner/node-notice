const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((err) => {
    console.log("Problem connection to the database" + err);
  });

module.exports = mongoose;
