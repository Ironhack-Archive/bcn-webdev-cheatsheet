// npm install --save passport passport-local

const passport = require('passport');
const flash = require('connect-flash');

// NOTE: the following file should export a function that does the passport setup (serialize, unserialize, strategies)

const configurePassport = require('./helpers/passport');

// - passport

configurePassport();
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
