const bcrypt = require("bcryptjs");
const model = require("../database/db");

function get(request, response) {
  response.send(`
    <h1>Log in</h1>
    <form action="log-in" method="POST">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <button>Log in</button>
    </form>
  `);
}

function post(request, response) {
  const { email, password } = request.body;
  model
    .getUser(email)
    .then((user) => bcrypt.compare(password, user.password))
    .then((match) => {
      if (!match) {
        throw new Error("Password mismatch");
      } else {
        response.send(`<h1>Welcome back, ${email}</h1>`);
      }
    })
    .catch((error) => {
      console.error(error);
      response.send(`<h1>User not found</h1>`);
    });
}

module.exports = { get, post };
