// In this file we will keep all the server-related info
const http = require("http");
const app = require("./app.js");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, ()=>{
      console.log(`Listening to port ${PORT}` );
})


