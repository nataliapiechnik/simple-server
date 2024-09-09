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

server.get("/", (_req, res) => {
  process.stdout.write("Hello_" + _req.query.id);
  res.send("Hello Express from bbapp 2!");
  console.log("parasol" + _req.query.id);
  console.error("some error 122###############");
  process.stdout.write("Dzien dobry_" + _req.query.id);
  process.stdout.write("FIND-IT-TEST process stdout");
  process.stderr.write("FIND-IT-TEST process stdout");
  console.log("FIND-IT-TEST console log");
  console.error("FIND-IT-TEST console error");
});
server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
