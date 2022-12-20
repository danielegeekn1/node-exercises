const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    response.end(
      "<html><body><h1>Welcome in the world wide web</h1></body></html>"
    );
  });
}

// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000`);
// });
module.exports = createApp;
