const planets = require("../../models/planets.models.js");

function getAllPlanets(req, resp){
      return resp.status(200).json(planets);
}

module.exports = {
      getAllPlanets
}