// npm install bcrypt

const bcrypt     = require("bcrypt");
const saltRounds = 10;

// Signup user

const salt  = bcrypt.genSaltSync(saltRounds);
const hashedPassword = bcrypt.hashSync(plainPassword, salt);

// Login user

if (bcrypt.compareSync(password /* provided password */, user.password/* hashed password */)) {
  // Save the login in the session!
  req.session.currentUser = user;
  res.redirect("/");
} else {
  res.redirect("/auth/login");
}
