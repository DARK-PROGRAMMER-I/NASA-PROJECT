const express = require("express");

const app = express();  
// Adding MiddleWare
app.use(express.json);

module.exports = app;