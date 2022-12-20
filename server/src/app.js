const express = require("express");
const cors = require("cors");
const planetRouter = require("./routes/planets/planets.routes");

const app = express();  

// We will add Cors Middleware here
app.use(cors({
      origin: "http://localhost:8000"
}))

// Adding MiddleWare
app.use(express.json);

// Planet Routes
app.use(planetRouter);

module.exports = app;