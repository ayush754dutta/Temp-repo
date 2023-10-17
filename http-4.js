"use strict";

const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log(request);
  if (request.url === "/") {
    response.end("Welcome to our page");
    // return;
  } else if (request.url === "/about") {
    response.end("This is our short history");
    // return;
  } else {
    response.end(`
<h1>Oops!</h1>
<p>Sorry, page not found</p>
<a href="/">back home</a>
`);
  }
  //   resolve.write("Welcome To Our home Page");
  //   resolve.end();
});

server.listen(5000);
