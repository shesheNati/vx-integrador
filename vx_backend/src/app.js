const express = require("express");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const routes = require("./routes");
const cors = require('cors')



//CONFIG ENV VARS
dotEnv.config();

// APP AND APP VARS
const app = express();
app.set("PORT", process.env.API_PORT || 8080);

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/v1", routes);

//si el usuario no encuentra la ruta
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

module.exports = app;
