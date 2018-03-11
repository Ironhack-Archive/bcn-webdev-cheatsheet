

# backend

- create heroku app "foobar-server"

## backend app.js

```
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL]
}));
```

## backend .env

```
MONGODB_URI=mongodb://localhost:27017/foobar
CLIENT_URL=http://localhost:4200
```

## heroku app "foobar-api" settings

```
MONGODB_URI=...
CLIENT_URL=https://foobar.herokuapp.com
```




# frontend

- create heroku app "foobar"

## frontend ng build --aot -prod

- fix all the errors

## frontend package.json

- add engines (run `node --version` and `npm --version` in your laptop first)

```
"engines": {
  "node": "9.0.0",
  "npm": "5.5.1"
},
```

- add the following entries to the `scripts` object

```
"heroku-prebuild": "rm -rf node_modules && npm cache clean --force",
"postinstall": "ng build --aot -prod",
"start": "node app.js"
```

- move the following entries from `devDependencies` to `dependencies`:

```
@angular/cli
@angular/compiler-cli
typescript
```

## frontend add app.js file

- this tiny node server will serve your angular app in heroku
- copy `app.js` to the root of the repository
- `npm install --save express`

## frontend environemnts

- add `apiUrl: 'http://localhost:3000'` to `src/app/environments/environment.ts`
- add `apiUrl: 'http://foobar-server.herokuapp.com'` to `src/app/environments/environment.prod.ts`

## in all services

- import envinroment and define the `baseUrl` for all ops in this service (e.g. ` + "/auth"`)

```
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl + '/name-of-resource';
```

- use that `apiUrl` in all methods
  

## testing against the heroku backend

- go to heroku and change the "foobar-api" settings to allow testing from localhost (set `CLIENT_URL` temporarily to `http://localhost:4200`)
- go to `src/app/environments/environment.ts` and temporarily change the `apiUrl` to be the heroku one
- load a route that does a GET/POST to backend
- test that there are no errors in the console
- test you get the expected results from heroku (success, the seeded data or empty results)
- after testing make sure you reset the settings
-- in the heroku backend project settings, `CLIENT_URL` should be set to `https://foobar.herokuapp.com`
-- in `environment.ts` the `apiUrl` key should be set to `http://localhost:3000`

## deploy

- commit everything
- merge to master
- push to `origin master` AND `heroku master`


