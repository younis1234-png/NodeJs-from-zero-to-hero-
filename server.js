const http = require("http");

const express = require("express");
const app = express();

const routes = require("./routes");

// the parsing of the body: is for the incoming request to hav access to out=r rea.body
// the urlencoded this a function, it request a middleware. At the end it will call next. but it will do res.body parser before
// with that now WE GONNA GET THE BODY PARSER INSTED OF UNDEFINED ON LINE 23
// THAT WILL GIVE US AN OBJE3CFT { title: 'INPUT' }
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  // console.log("In the second  middleware");
  res.send(
    "<form action ='/product' method='POST'><input type='text' name='title' /> <button type='submit'>Add product </button> </form>"
  );
});

app.use("/product", (req, res, ext) => {
  // req body is
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("In the second  middleware");
  res.send("<h1>Hello from express");
});

app.listen(3000, () => {
  console.log("server is running " + 3000);
});
