const crypto = require("crypto");
const express = require("express");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

// this should normally be hidden in a env var
const SECRET = "nkA$SD89&&282hd";

const server = express();
const logger = require("./middleware/logger");
const getUser = require("./middleware/getUser");
const checkAuth = require("./middleware/checkAuth");
const handleError = require("./middleware/handleErrors");
const { deleteSession, createSession } = require("./model");

server.use(cookieParser(SECRET));
server.use(express.urlencoded({ extended: false }));
server.use(getUser);
server.use(logger);

server.get("/", (req, res) => {
  const user = req.session;
  if (user) {
    res.send(`
      <h1>Hello ${user.email}</h1>
      <form method="post" action="/log-out">
        <button>Log out</button>
      </form>
    `);
  } else {
    // no point keeping cookie if it doesn't match any saved sessions
    res.clearCookie("sid");
    res.send(`<h1>Hello world</h1><a href="/log-in">Log in</a>`);
  }
});

// Challenge 1.1
// server.use((req, res, next) => {
//   const sid = req.signedCookies.sid;
//   const sessionInfo = sessions[sid];
//   if (sessionInfo) {
//     req.session = sessionInfo;
//   }
//   next();
// });

// Challenge 1.3
// function checkAuth(req, res, next) {
//   const user = req.session;
//   if (!user) {
//     res.status(401).send(`<h1>Please login <a href="/log-in">here</a></h1>`);
//   } else {
//     next();
//   }
// }

// Challenge 2.1
// function handleErrors(error, req, res, next) {
//   console.error(error);
//   const status = error.status || 500;
//   res.status(status).send(`<h1>Oops there's been an error</h1>`);
// }

server.get("/log-in", (req, res) => {
  res.send(`
    <h1>Log in</h1>
    <form action="/log-in" method="POST">
      <label for="email">Email</email>
      <input type="email" id="email" name="email">
    </form>
  `);
});

server.post("/log-in", (req, res) => {
  const newUser = req.body;
  const sid = createSession(newUser);
  res.cookie("sid", sid, {
    signed: true,
    httpOnly: true,
    sameSite: "lax",
    maxAge: 600000,
  });
  res.redirect("/profile");
});

server.post("/log-out", (req, res) => {
  const sid = req.signedCookies.sid;
  deleteSession(sid);
  res.clearCookie("sid");
  res.redirect("/");
});

server.get("/profile", checkAuth, (req, res) => {
  const user = req.session;
  // if (!user) {
  //   res.status(401).send(`<h1>Please login <a href="/log-in">here</a></h1>`);
  // } else {
  //   res.send(`<h1>Hello ${user.email}</h1>`);
  // }
  res.send(`<h1>Hello ${user.email}</h1>`);
});

server.get("/profile/settings", checkAuth, (req, res) => {
  const user = req.session;
  res.send(`<h1>Settings for ${user.email}</h1>`);
});

server.get("/error", (req, res, next) => {
  const fakeError = new Error("uh oh");
  fakeError.status = 403;
  next(fakeError);
});

server.use(handleError);
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
