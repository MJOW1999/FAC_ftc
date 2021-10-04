const db = require("../database/connection.js");

// Challenge 1

function get(request, response) {
  db.query("SELECT username FROM users").then((result) => {
    const users = result.rows;
    // const userList = users.map((user) => `<li>${user.username}</li>`).join("");
    // response.send(`<ul>${userList}</ul>`);
    response.send(users);
  });
}

module.exports = { get };
