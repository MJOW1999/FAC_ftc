const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};

// function verifyUser(email, password) {
//   return model.getUser(email).then((user))
// }

function createUser(email, password, name) {
  bcrypt
    .hash(password, 10)
    .then((hash) => model.createUser({ email, password: hash, name }));
}

function saveUserSession(user) {
  const sid = crypto.randomBytes(18).toString("base64");
  return model.createSession(sid, {user});
}

module.exports = { COOKIE_OPTIONS, createUser, saveUserSession };
