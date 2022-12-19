import express from "express";

import "express-async-errors";
const app = express();
app.get("/", (req, res) => {
  const jsonBody = JSON.stringify({ location: "Earth" });
  res.send(jsonBody);
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running at port 3000");
});
