const express = require("express");
const home = require("./handlers/home");
const logIn = require("./handlers/logIn");
const signUp = require("./handlers/signUp");

const server = express();

server.use(express.urlencoded({ extended: false }));

server.get("/", home.get);
server.get("/sign-up", signUp.get);
server.post("/sign-up", signUp.post);
server.get("/log-in", logIn.get);
server.post("/log-in", logIn.post);

const crypto = require("crypto");

const password = "hunter2";

const hashedPassword = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log(hashedPassword);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
