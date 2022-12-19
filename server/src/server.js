// In this file we will keep all the server-related info
const http = require("http");

const PORT = 8000;

const server = http.createServer();

server.listen(PORT, ()=>{
      console.log("Listening to port " + PORT.toString);
})


