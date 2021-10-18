const crypto = require("crypto");

let sessions = {};

function getSession(sid) {
  return sessions[sid];
}

function createSession(data) {
  const sid = crypto.randomBytes(18).toString("base64");
  sessions[sid] = data;
  return sid;
}

function deleteSession(sid) {
  delete sessions[sid];
}

module.exports = { getSession, createSession, deleteSession };
