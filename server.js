const http = require("http");

const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const routes = require("./routes");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

// admin router and the order matter
app.use(adminRoutes);
// shop router
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("server is running " + 3000);
});
