
# concepts

- HTTP request/response cycle
- Backend rendering
- Templates + Layouts + Partials
- Cookies + Session + Auth
- CommonJS Modules
- NPM Packages
- MVC Pattern
- CRUD
- Document DBs + Data modelling

# es6

- [LU - ES6 | Basics](http://learn.ironhack.com/#/learning_unit/3976)
- [LU - ES6 | Advanced](http://learn.ironhack.com/#/learning_unit/3977)

- let and const
  - [MDN let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - [MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - [MDN temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone)
  - block scoped
    - no leaking vars from for loops, including the the iterator var(s)
    - shadowing now also happens with blocks
  - const
    - value can't change
    - `const num = 42; num++ // ERROR`
    - if object can be mofiied (just no reassigned)
      - `const person = {name: 'Joe'}; person.name = 'Joan'; // OK`
      - `const person = {name: 'Joe'}; person = {name: 'Joan'}; // ERROR`
    - same for arrays (remeber: arrays are objects) or any other object
      - `const names = ['Joe']; names.push('Joan') // OK`
      - `const names = ['Joe']; names = []; // ERROR`


- arrow functions
  - [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  - have no context
  - no more self = this;
  - arrow functions everywhere, especially as callbacks
  - single line arrow functions (no brackets, implicit return)
    - `const addNumbers = (n1, n2) => n1 + n2;`
  - multi line, require return statement
    ```
    const addRandom = (num) => {
      const random = Math.random();
      return num + random;
    }
    ```
  - returning an object from single line arrow function: use ()
    - `const makePerson = (name, age) => ({name: name, age: age});`

- classes
  - [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - `class` and `constructor()`
  - methods
  - inheritance with `class Foo extends Bar` and `super()`

- spread syntax
  - [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  - spread operator ...arr
  - inserting elements into an array
    - `var parts = ['shoulders', 'knees'];`
    - `var lyrics = ['head', ...parts, 'and', 'toes'];`
  - concatenating
    - `arr1 = [...arr1, ...arr2];`
  - copy an array
    - `arr1 = [...arr2];`

- others
  - object shortcuts (implicit value)
  - template (and multiline) strings
  - default values for function parameters
  - array method examples `arr.findIndex()`, `arr.fill()`, `Array.from()`
  - string method examples `str.includes()`, `str.startsWidth()`, `str.repeat()`

## promises

- [LU](http://learn.ironhack.com/#/learning_unit/3979)
- [MDN Promises guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Promises reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- syntax
  - instead of `do((err, result) => {});`
  - `do().then(result => { ... handle result ... }).catch(err => { ... handle error ... })`

- promise as a variable
  - `const promiseToDoSomething = doSomething()`
  - can be passed around
  - can be stored, useful for accessing unresolved/cached results with only one (async) syntax

- late binding
  - binding after the promise has been resolved/rejected still possible
  - then/catch will still be invoked

- multiple binding
  - `promiseToDoSomething.then(result => { ...do things... })`
  - `promiseToDoSomething.then(result => { ...do more things... })`

- chaining results
  - return value of `.then()` callback is given as argument to the chained `.then()` callback
  - `do1().then(resultOfDo1 => do2(resultOfDo1)).then(resultOfDo2 => { ... })`

- synchronizing parallel work
  - given array of promises
  - wait for all to resolve `Promise.all(promises).then(results => { /* array with resolve values of all promises, in same order */ })`
  - wait for the first to resolve `Promise.race(promises).then(result => { /* result is the resolve value of the first promise to resolve  */ })`

- DRY error handling
  - `do1().then(result1 => do2()).then(result2 => do3()).catch(err => /* { err is from do1(), do2() OR do3() */ });`

- creating a function that returns a promise
  ```javascript
  const doSomething = function () {
    return new Promise((resolve, reject) => {
      // call resolve(value) when you have the result
      // call reject(error) or throw new Error('error')
    });
  };
  ```

- creating pre-resolved/pre-rejected promises
  - `const resolved = Promise.resolve(value);`
  - `const rejected = Promise.reject(error);`



## es6 best practices

- [LU](http://learn.ironhack.com/#/learning_unit/3979)
- [refactoring](https://refactoring.guru/)
- short lines
- small functions
- use arrow functions
- variables and functions
  - use const always
  - use let when const not possible
  - don't use var anymore
- OO
  - small classes
  - small methods
  _ this._privateData
  - _doPricateThing()
- Promises
  - always use when available
  - always catch

# nodejs

- [LU](http://learn.ironhack.com/#/learning_unit/3985)
- [Node.js docs](https://nodejs.org/dist/latest-v10.x/docs/api/)

- **IT'S NOT A FRAMEWORK!**
- runtime environment for running javascript in the backend (v8 engine)
- app can be an http server (runs "forever")
- runs javascript, same as browser (but no window, no DOM)
- start apps with "node app.js"
- node callbacks convection (err, result) => { ... }
- has some built-in modules like `fs`, `process`, `path` and `http`

## node modules
- every js file is a module
- every file has it's own scope (no global scope)
- npm packages are also modules
- for our files:
  - in `folder/mymodule.js`, to define what it exports
    - `module.exports = ...`
  - in another file use relative path to require it
    - `const mymodule = require('./folder/mymodule')`
- for npm packages:
  - const express = require('express')

## npm
- http://npmjs.org
- npm init (new projects only)
- npm install (after cloning existing project)
- npm install --save package-name
- npm install --save-dev package-name
- npm install -g package-name (may require sudo)
- package.json (every node project needs one)
- always add "node_modules" to .gitignore

## package.json
- "scripts" are shortcuts
- "dependencies" are the packages the project needs to be executed
- "devDependencies" are the packages the developers need to work on the project

```json
"scripts": {
  "start": "node app.js",
  "start-dev": "nodemon --inspect app.js"
}
```

## nodemon
- npm install -g nodemon
- nodemon --inspect app.js
- in package.json scripts
  - "start": "nodemon app.js"
  - "start-dev": "nodemon --inspect app.js"


# http

- [LU](http://learn.ironhack.com/#/learning_unit/3986)
- request + response = request/response cycle
- request = headers + body (optional)
- response = status + headers + body (optional)
- cookies
  - httponly
  - secure
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


# express
- http server framework
- pipeline of middlewares, followed by routes

## express generator
- [docs](https://expressjs.com/en/starter/generator.html)
- npm install -g express-generator
- express my-project --view=hbs --git
- add start-dev to package.json scripts
- add launcher.json
- add .eslintrc.json (eslint --init)
- git init
- add .gitignore with node_modules
- add our [error handling snippets](./express-apps/app.js) to app.js

## session & auth
- use expression session (see snippet)
- 2x routes for login (get & post)
- 2x routes for signup (get & post)
- use post for logout
- signup: `req.session.currentUser = newUser`
- login: `req.session.currentUser = user`
- logout: `delete req.session.currentUser`
- user in views: `req.locals.user = req.session.currentUser`

## passport
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

## best practices

- order matters, middlewares before routes, 404 at the end
- separate your routes by prefix (e.g. '/auth', '/beers', ...)
- POST routes
  - check for authorization (e.g. `if (req.session.currentUser) ... `
  - always validate the POST body (e.g. `if (!req.body.username) ....`
  - always `res.redirect()` never `res.render()`
- GET routes
  - check for authorization (e.g. `if (req.session.currentUser) ... `
  - when loading items by id, check if DB returns a doc, and if it doesn't `return next()` to send to 404 middleware
  - use a `const data` object to send to `res.render('template', data)`
- always `.catch(next)`

# mongodb

- document database (as opposedd to relational database)
- stores data as documents, schema free, but relationships still exist
- data modelling
- [query operators](https://docs.mongodb.com/manual/reference/operator/query/)
- [update operators](https://docs.mongodb.com/manual/reference/operator/update/)

## mongo shell
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

## mongo import
- mongoimport  --db databaseName  --collection collectionName --file fileName

## mongoose
- npm install --save mongoose
- object document mapper
- bring schemas into our use of mongodb
- see example schemas in `./snippets`
- types: String, Number, Date, Boolean, Array, Mixed, Objectid
