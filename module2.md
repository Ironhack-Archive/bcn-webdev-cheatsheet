
# concepts
- module 2 project = backend rendered app (old school)
- http request/response cycle
- http headers & body
- http status codes
- data modelling
- nodejs (v8 in the backend)
- node modules & packages
- express & mongoose frameworks

# es6
- arrow functions have no context
- arrow functions usually as callbacks
- single line arrow functions (no brackets, implicit return)
- variables and constants
  - use const always
  - use let when const not possible
  - don't use var anymore
- es6 classes
- es6 with inheritance
- spread operator ...arr
- object shortcuts (implicit value)
- template (and multiline) strings

# nodejs
- **IT'S NOT A FRAMEWORK!**
- runtime environment for running javascript in the backend (v8 engine)
- app can be an http server (runs "forever")
- runs javascript, same as browser (but no window, no DOM)
- start apps with "node app.js"
- node callbacks convection (err, result) => { ... }


# node modules
- every js file is a module
- every file has it's own scope (no global scope)
- npm packages are also modules
- for our files:
  - in mymodule.js do module.exports = ...
  - const mymodule = require('./folder/mymodule')
- for npm packages:
  - const express = require('express')

# npm
- http://npmjs.org
- npm init (new projects only)
- npm install (after cloning existing project)
- npm install --save package-name
- npm install --save-dev package-name
- npm install -g package-name (may require sudo)
- package.json (every node project needs one)
- always add "node_modules" to .gitignore

# package.json
- "scripts" are shortcuts
- "dependencies" are the packages the project needs to be executed
- "devDependencies" are the packages the developers need to work on the project

```json
"scripts": {
  "start": "node app.js",
  "start-dev": "nodemon --inspect app.js"
}
```

# nodemon
- npm install -g nodemon
- nodemon --inspect app.js
- in package.json scripts
  - "start": "nodemon app.js"
  - "start-dev": "nodemon --inspect app.js"


# express generator
- npm install -g express-generator
- express my-project --view=ejs --git
- add start-dev to package.json scripts
- add launcher.json
- add .eslintrc.json (eslint --init) OR .jshintrc
- git init
- add .gitignore with node_modules

# express
- http server framework
- pipeline of middlewares, followed by routes
- see snippets

# passport
- config (see snippet)
  - serialize
  - deserialize
  - use(new Strategy)
  - app.use(...);
  - app.use(...);
- req.login(newUser)
- req.logout()
- if (!req.user) { ... }
- if (!req.isAuthenticated()) { ... }

# mongodb
- document database (as opposedd to relational database)
- stores data as documents, schema free, but relationships still exist
- instal mongodb, make sure it is running

# mongo shell
- $ mongo
- show dbs
- use databaseName
- db.help()
- show collections
- db.collectionName.help()
- db.collectionName.find().pretty()
- db.collectionName.insert({})

# mongo import
- mongoimport  --db databaseName  --collection collectionName --file fileName

# mongoose
- npm install --save mongoose
- object document mapper
- bring schemas into our use of mongodb
- see example schemas in `./snippets`
- types: String, Number, Date, Boolean, Array, Mixed, Objectid

# heroku
- http://learn.ironhack.com/#/learning_unit/2233
- Is a cloud platform for hosting apps
- https://signup.heroku.com/?c=70130000001x9jEAAQ
- heroku login
- heroku git:remote -a projectName
- package.json
  - "start": "node ./bin/www"
  - npm & node engines
- git push heroku master
- heroku logs
- heroku addons:create mongolab:sandbox
- heroku addons:open mongolab
- heroku config:get MONGODB_URI
- REMOVE ALL API KEYS (e.g. facebook secret) FROM YOUR CODE!!!!
- npm install --save dotenv
- require('dotenv').config();
- example .env file (adds fake environment variables to `process.env`)
```javascript
  MONGODB_URI=mongodb://localhost/databaseName
```
- .gitignore .env
- example app.js
```javascript
  require("dotenv").config();
  mongoose.connect(process.env.MONGODB_URI);
```
