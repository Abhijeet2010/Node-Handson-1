const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("You are on Node First Handson home page..");
    // res.send('<h1>Hello Home page..</h1>');
    res.write("<h1>Hello Home page..</h1>");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    // res.render("about.html")
    res.write("You are on About Page..");
    res.write("'Displaying data in string format... '");
    res.end();
  } else if (req.method === "GET" && req.url === "/contact") {
    res.write("I'm in contact Page..You can Contact us on..");
    res.write(JSON.stringify([123456789, 987654321]));
    res.end();
  }
});
server.listen(8001);
