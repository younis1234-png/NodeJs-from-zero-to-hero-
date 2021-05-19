const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> My first Page </title> </head>");
    res.write("<body><h1>Home page </h1></body>");
    res.write("</head>");
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> My first Page </title> </head>");
    res.write("<body><h1>About</h1></body>");
    res.write("</head>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> My first Page </title> </head>");
    res.write("<body><h1>no page here</h1></body>");
    res.write("</head>");
    return res.end();
  }
});

server.listen(1111, () => {
  console.log("server is running");
});
