const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  // what we want to respond back
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> My first Page </title> </head>");
  res.write("<body><h1>Hello from node</h1></body>")
  res.write("</head>");
  res.end();
});

server.listen(1111, () => {
  console.log("server is running");
});
