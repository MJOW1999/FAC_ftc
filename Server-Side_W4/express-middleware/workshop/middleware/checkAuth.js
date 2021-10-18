function checkAuth(req, res, next) {
  const user = req.session;
  if (!user) {
    res.status(401).send(`<h1>Please login <a href="/log-in">here</a></h1>`);
  } else {
    next();
  }
}

module.exports = checkAuth;
