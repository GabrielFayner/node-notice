const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//CONTROLLERS
require("./controllers/index")(app);

//DEFINE PORT
app.listen(PORT, () => {
  console.log(`Port listening on PORT ${PORT}`);
});
