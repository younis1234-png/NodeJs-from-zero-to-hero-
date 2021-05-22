const http = require("http");

const express = require("express");
const app = express();

const routes = require("./routes");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

//.get only gonna get fired when we have a get request
app.get("/add-product", (req, res, next) => {
  res.send(
    "<form action ='/product' method='POST'><input type='text' name='title' /> <button type='submit'>Add product </button> </form>"
  );
});

// .post is gonna get fired when we have a post request
app.post("/product", (req, res, ext) => {
  // req body is
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express");
});

app.listen(3000, () => {
  console.log("server is running " + 3000);
});
