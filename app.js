let http = require("http");
const { createServer } = require("tls");
function createApp() {
  return createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    // res.setHeader("Content-Type", "application/json");
    // const jsonBody = JSON.stringify({ location: "Earth" });
    res.end("Welcome to the World Wide Web");
  });
}
// server.listen(3000, () => {
//   console.log("listening to the server");
// });
