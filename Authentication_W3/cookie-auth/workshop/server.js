const express = require("express");

const server = express();

const cookieParser = require("cookie-parser");

server.use(cookieParser());

server.get("/example", (request, response) => {
  response.cookie("hello", "this is my cookie", {
    httpOnly: true,
    maxAge: 1000 * 60, // 60,000ms (60s)
    sameSite: "lax",
  });
  response.redirect("/");
});

// server.get("/", (request, response) => {
//   const cookies = request.get("cookie");
//   console.log(cookies);
//   response.send("<h1>Hello</h1>");
// });
server.get("/", (request, response) => {
  console.log(request.cookies);
  // ...
});

server.get("/remove", (request, response) => {
  response.clearCookie("hello");
  response.redirect("/");
});



const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
