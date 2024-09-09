const axios = require("axios");
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static("public"));

server.get("/", (_req, res) => {
  console.log("app got an request on / path");
  res.send("Hello Expkldfasgdfdhdfasgguhklmkjkjkhjnlkgvhkglhujlmress!");
});
server.get("/test", (_req, res) => {
  console.log("app got an request on /test path");
  res.send("Hello test!");
});

process.stderr.write("FIND-IT-TEST process error");

process.stderr.write("FIND-IT-TEST process error");

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
