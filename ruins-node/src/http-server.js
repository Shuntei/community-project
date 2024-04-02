import http from "node:http";
// http library of node

const server = http.createServer((req, res) => {
  // this callback function is called request listener

  //it's used to set the HTTP response status code and headers before sending the response body.
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(`<h2>hellooo</h2>
  <p>${req.url}</p>`)
});

// try not to use ports under 1024
server.listen(3000);
