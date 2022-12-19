const express = require("express");
const planetRouter = require("./routes/planets/planets.routes.js");

const app = express();  
// Adding MiddleWare
app.use(express.json);

// Planet Routes
app.use(planetRouter);

module.exports = app;