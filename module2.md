
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
```
doSomething('someparam', (param1, param2) => {
    ...
    return result;
});
```
- single line arrow functions (no brackets, implicit return)

```
arr = arr.map((item) => item + 1);
```

- variables and constants
  - use const always
  - use let when const not possible
  - don't use var anymore

- es6 classes

```
class Foo {
    constructor(param1) {
        this.prop1 = param1;
    }
    method1 () {
        ...
    }
}
```

- es6 with inheritance

```
class Foo extends Bar {
    constructor(param1, param2) {
        super(param1, param2)
    }
    ...
}
```

- spread operator ...arr

- object shortcuts (implicit value)

```
const name = "foo";
const obj = {name};
console.log(obj.name); // "foo"
```

- template (and multiline) strings

```
const name = "joe"
const text = `
    <p>hello ${name}</p>
`;
```

# nodejs
- runtime environment for running javascript in the backend (v8 engine)
- app can be an http server (runs "forever")
- runs javascript, same as browser (but no window, no DOM)
- start apps with "node app.js"

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
- npm install --save package-name (add )
- npm install -g package-name (may require sudo)
- package.json (every node project needs one)
- always add "node_modules" to .gitignore

# package.json
- "scripts" are shortcuts
- "dependencies" are the packages the project needs

```
"scripts": {
  "start": "node app.js",
  "start-dev": "nodemon --inspect app.js"
},
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
- package.json scripts


# mongoose

- `npm install --save mongoose`

