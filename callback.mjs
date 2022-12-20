import * as fs from "node:fs";
fs.readFile("./file-01.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
  fs.writeFile("./file-02.txt", data, { encoding: "utf8" }, (err, data) => {
    console.log("file has been overwritten");
  });
});
