
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
- has some built-in modules like `fs`, `process`, `path` and `http`+

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

# http
- request, response
- request = headers + body (optional)
- response = headers + body (optional)
- url
  - `https://localhost:3000/homepage?foo=bar&baz=123#fragment`
  - `scheme://hostname:port/path?querystring` 
  - fragment is never sent to the server
- method: GET, POST, PUT, DELETE [and others](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status):
  - 2xx - success (e.g. 200 OK, 204 No Content)
  - 3xx - redirection (e.g. 301 moved permanently)
    - used with response header `Location: http://....` indicating where it moved too
  - 4xx - user error (e.g.: 404 not found, 401 not authorized)
  - 5xx - server error (e.g.: 500 internal error, 504 timeout)


# nodemon
- npm install -g nodemon
- nodemon --inspect app.js
- in package.json scripts
  - "start": "nodemon app.js"
  - "start-dev": "nodemon --inspect app.js"


# express generator
- [docs](https://expressjs.com/en/starter/generator.html)
- npm install -g express-generator
- express my-project --view=ejs --git
- add start-dev to package.json scripts
- add launcher.json
- add .eslintrc.json (eslint --init)
- git init
- add .gitignore with node_modules
- add our [error handling snippets](./express-apps/app.js) to app.js 

# express
- http server framework
- pipeline of middlewares, followed by routes
- see snippets

# auth
- use expression session (see snippet)
- 2x routes for login (get & post)
- 2x routes for signup (get & post)
- use post for logout
- signup: req.session.currentUser = newUser
- login: req.session.currentUser = user
- logout: req.session.currentUser = null
- user in views: req.locals.user = req.session.currentUser

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
- install mongodb, make sure it is running

# mongo shell
- $ mongo
- show dbs
- use databaseName
- db.help()
- db.createCollection("animals")
- show collections
- db.animals.help()
- db.animals.find().pretty()
- db.animals.insert({})
- [read operations](https://docs.mongodb.com/manual/crud/#read-operations)

# mongo import
- mongoimport  --db databaseName  --collection collectionName --file fileName

# mongoose
- npm install --save mongoose
- object document mapper
- bring schemas into our use of mongodb
- see example schemas in `./snippets`
- types: String, Number, Date, Boolean, Array, Mixed, Objectid

# heroku
- http://learn.ironhack.com/#/learning_unit/3170
- create heroku account
  - it's a cloud platform for hosting apps
  - https://signup.heroku.com/
- create application
  - provide a name (it will be the url https://app-name.herokuapp.com)
- install [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
  - download here: https://devcenter.heroku.com/articles/heroku-cli

- prepare app inside the project
  - `$ heroku login`
  - `$ heroku git:remote -a app-name`
  - make sure package.json is in the root of the project
  - make sure package.json contains a start script
  - add [engines](https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version) to package.json

```
"scripts": {
  "start": "node ./bin/www"
},
"engines": {
  "node": "x.x.x",
  "npm": "x.x.x"
}
```

- create database via shell
  - `$ heroku addons:create mongolab:sandbox`
  - `$ heroku addons:open mongolab`
  - `$ heroku config:get MONGODB_URI`

- OR create database in [MLAB](https://mlab.com/)
  - sign up
  - create new MongoDB Deployment
    - cloud provider
    - free account
    - provide a name
    - submit
    - wait until the database is created
    - add "admin" user database
  - copy mongodb url to herokuapp settings config variables `MONGODB_URI`
  
```
mongodb://myuser:mypassword@ds255309.mlab.com:11309/ironhack-database
```
- configure app
  - REMOVE ALL API KEYS (e.g. facebook secret) FROM YOUR CODE
  - `$ npm install --save dotenv`
  - add `require('dotenv').config();` to app.js
  - create `.env` file (adds fake environment variables to `process.env`)
  - add `.env` to `.gitignore`
  - replace hardcoded mongodb URI with process env variable in app.js

```
# in .env file
MONGODB_URI=mongodb://localhost/databaseName
FACEBOOK_API_KEY=qwerqweoiov32414oih12p3ou12po12po3ihp1234
```


```javascript
// in app.js
mongoose.connect(process.env.MONGODB_URI, ...);
```

- deploy
  - `$ git push heroku master`
  - `$ heroku logs`
  - `$ heroku logs -t`
