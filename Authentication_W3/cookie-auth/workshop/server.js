const express = require("express");

const server = express();

const cookieParser = require("cookie-parser");

const crypto = require("crypto");

server.use(cookieParser("alongrandomstringnobodyelseknows"));

// server.get("/example", (request, response) => {
//   response.cookie("hello", "this is my cookie", {
//     httpOnly: true,
//     maxAge: 1000 * 60, // 60,000ms (60s)
//     sameSite: "lax",
//   });
//   response.redirect("/");
//   // const userInfo = {
//   //   id: 1,
//   //   username: "oliverjam",
//   //   admin: true,
//   // };
//   // response.cookie("user", userInfo, {
//   //   httpOnly: true,
//   //   maxAge: 1000 * 60,
//   //   sameSite: "lax",
//   // });
//   // response.redirect("/");
// });

// server.get("/", (request, response) => {
//   console.log(request.signedCookies);
//   response.send("<h1>Hello</h1>");
// });

// server.get("/remove", (request, response) => {
//   response.clearCookie("hello");
//   response.redirect("/");
// });

let sessions = {};

server.get("/login", (request, response) => {
  const sid = crypto.randomBytes(18).toString("base64");

  const userInfo = {
    id: 1,
    username: "MJOW1999",
    admin: true,
  };
  sessions[sid] = userInfo;
  response.cookie("sid", sid, {
    httpOnly: true,
    maxAge: 1000 * 60,
    sameSite: "lax",
    signed: true,
  });
  response.redirect("/")
});

server.get("/logout", (request, response) => {
  const sid = request.signedCookies.sid;
  delete sessions[sid];
  response.clearCookie("sid");
  response.redirect("/");
});



// later
// sessions["abcd"] = { id: 1, username: "oliverjam", admin: true };

server.get("/", (request, response) => {
  const sid = request.signedCookies.sid;
  if (sid) {
    const userInfo = sessions[sid];
    console.log(userInfo);
  }
  console.log(sessions);
  response.send("<h1>Hello</h1>");
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
