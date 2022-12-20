const express = require("express");
const planetRouter = require("./routes/planets/planets.routes");

const app = express();  

// We will add Cors Middleware here
// Adding MiddleWare
app.use(express.json);

// Planet Routes
app.use(planetRouter);

module.exports = app;