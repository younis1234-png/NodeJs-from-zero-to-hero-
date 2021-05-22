const http = require("http");

const express = require("express");
const app = express();

const routes = require("./routes");

// use allow us the add another middleware function
// next is a function that gonna be passed to the express function 
// In this case the request will never reach the second middlewaare 
// Next allows the request to continue to the next middleware in line
app.use((req, res, next) => {
  console.log("In the middleware");
});
app.use((req, res, next) => {
  console.log("In the second  middleware");
});

const server = http.createServer(routes);

server.listen(3000);
