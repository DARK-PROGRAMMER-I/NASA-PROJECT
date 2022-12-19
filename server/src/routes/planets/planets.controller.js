const planets = require("../../models/planets.models");

function getAllPlanets(req, resp){
      return resp.status(200).json(planets);
}

module.exports = {
      getAllPlanets
}