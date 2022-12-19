const express = require("express");
const planetCtr = require("./planets.controller");

const planetRouter = express.Router();

planetRouter.get("/planets", planetCtr.getAllPlanets);

module.exports = planetRouter;