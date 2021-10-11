const model = require("../database/db");

const crypto = require("crypto");

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
  const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");
  model
    .getUser(email)
    .then((dbUser) => {
      // const hashedPassword = crypto
      // .createHash("sha256")
      // .update(password)
      // .digest("hex");
      if (dbUser.password !== hashedPassword) {
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
