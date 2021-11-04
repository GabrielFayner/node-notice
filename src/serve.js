const express = require("express");
const swaggerDocs = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//CONTROLLERS
require("./controllers/index")(app);

//DEFINE PORT
app.listen(PORT, () => {
  console.log(`Port listening on PORT ${PORT}`);
});
