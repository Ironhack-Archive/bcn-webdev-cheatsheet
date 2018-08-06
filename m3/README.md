# concepts
- SPA
- Components
- Injection
- Singleton
- Services
- REST API

# typescript
- [DOCS](https://www.typescriptlang.org/)
- [LU](http://learn.ironhack.com/#/learning_unit/2960)
- made by microsoft
- superset of javascript
- browser can NOT understand typescript
- transpiled down to es6 or es5 by tools
- types
  - [DOCS](https://www.typescriptlang.org/docs/handbook/basic-types.html)
  - type safety vs javascript dynamic types
  - can (should) be applied to:
    - constants and variables
    - function parameters
    - function return values
    - class properties
- interfaces
  - [DOCS](https://www.typescriptlang.org/docs/handbook/interfaces.html)
  - small reusables "contracts"
  - define what will be "public"
  - interfaces are also types (advanced)
- classes
  - [DOCS](https://www.typescriptlang.org/docs/handbook/classes.html)
  - concept of public vs private
  - properties documented before the constructor
  - class properties have types
  - class method arguments and return values have types
  - can implement more than one interface
  - all methods and fields are public by default
  - methods and fields can be declared as private
  - private, public shortcut on constructors
- decorators
  - [DOCS](https://www.typescriptlang.org/docs/handbook/decorators.html)
  - can be applied to class, class property, class method, function param, getters/setters


# angular
- made by google
- written in typescript
- single page application framework, including:
  - views
  - components
  - form management
  - routing
  - dependency injection


# angular CLI
- `$ ng new name-of-app`
- `$ ng serve`
- `$ ng serve --aot`
- `$ ng g c components/name-of-component`
- `$ ng g c pages/name-of-page`
- `$ ng g s services/name-of-service`
- `$ ng g p pipes/name-of-pipe`
- `$ ng g class models/name-of-model`
- `$ ng build`


# app structure
- `index.html`
  - is static
  - contains `<app-root></app-root>`
  - can contain extra script and style tags
- app/app.module.ts (a.k.a. THE app)
  - declares all the angular modules used in the app
  - declares the routing
  - declares all the components created by us
  - declares all the services, pipes, etc... create by us
- app/app.component.* (a.k.a. main component or layout component)
  - layout of the app (header, footer)
  - where the `<router-outlet></router-outlet>`goes
- app/pages
  - where we should store our page components
  - `ng g c pages/login-page`
- app/components
  - where we should store our smaller components
  - `ng g c components/auth-login-form`

# binding
- interpolation `{{ expression }}`
- property binding `<button [disabled]="processing">`
- event binding `<button (click)="handleClick($event, index, true)">`
- two way binding
  - add `import { FormsModule } from '@angular/forms';` to `app.module.ts`
  - add `imports: [ ... FormsModule, ... ]` to `app.module.ts`
  - `<input type="text" [(ngModel)]="username" />`

# template variables
- declared directly in templates
  - in inputs `<input #username ...>`
  - in inputs with NgModel `<input #usernameField="ngModel" ...>`
  - in forms `<form #form="ngForm" ...>`
- used directly in templates
  - ngModel variables `<div *ngIf="usernameField.errors">`
  - ngForm variables `<div *ngIf="form.invalid">`
- passed from template to component class
  - input/ngModel variables `<input (keyup)="handleKeyUp(usernameField.value)" ...`
  - ngForm variables `<form (ngSubmit)="addAnimal(form)" ...`

# model/form state
- state is available in `ngForm` AND `ngModel` variables (see template vars above)
- available properties:
  - valid
  - invalid
  - dirty
  - pristine
  - touched
  - untouched
  - errors (e.g. `usernameField.errors.minlength`)
  - submitted (only in forms)

# directives
- [DOCS](https://angular.io/guide/template-syntax)
- [LU](http://learn.ironhack.com/#/learning_unit/2969)
- ngIf
  - `*ngIf="expression"`
- ngFor
  - `*ngFor="let item of array"`
  - `*ngFor="let item of array, let ix = index"`
  - `*ngFor="let item of array, trackBy: trackFn"` (advanced)
- ngSwitch
  - `[ngSwitch]="expression">`
  - `*ngSwitchCase="expression"` (if you want a string, make sure to wrap it with strings e.g: `*ngSwitchCase="'not-found'"`)
  - `*ngSwitchDefault`
- ngClass
  - use with key value pairs
    - key is classname
    - value is expression, apply class if expression is truthy
    - `[ngClass]="{ 'has-errors': usernameField.invalid }"`
  - use with array
    - `[ngClass]="arrayOfStrings"`
- ngStyle
  - don't use if you can just toggle css classes with ngClass
  - `[ngStyle]="{ 'left': player.x, 'top': player.y }"`

# component hierarchy
- components can be nested
- create components to reuse (DRY principle) and simplify (single responsability principle)
- top level components we call "page" components (convention)
- generate "page" components with `ng g c pages/login-page`
- generate "other" components with `ng g c components/auth-login-form`
- always route to a "page" component
- concetrate responsibilities in "page" components (e.g.: talk to services that connect to the API)
- keep the "other" components simple
- component input
  - `[input]="data"`
  - send data from parent components to child components
- component outputs
  - `(output)="handleFunction($event)"`
  - listen in parent components to events emitted from child components

# component inputs
- [DOCS](https://angular.io/guide/component-interaction)
- [LU](http://learn.ironhack.com/#/learning_unit/2974)
- in the child component's class
  - `import { Input } from '@angular/core'`
  - `@Input() restaurant: Object`
  - you can use `this.restaurant` in the component methods
  - you can use `{{restaurant.name}}` in the component template
- in the parent component's template
  - `<app-restaurant-card [restaurant]="data">...`

# component outputs
- [DOCS](https://angular.io/guide/component-interaction)
- [LU](http://learn.ironhack.com/#/learning_unit/2974)
- in the child component's class
  - `import { Output, EventEmitter } from '@angular/core'`
  - `@Output() change = new EventEmitter<string>();`
  - you can use `this.change.emit(this.terms)`
- in the parent component's template
  - `<app-restaurant-search (change)="handleSearchChange($event)"> ...`
- in the parent component's class
  - `handleSearchChange(event) { .... }`

# pipes
- [DOCS](https://angular.io/api/core/Pipe)
- [LU](http://learn.ironhack.com/#/learning_unit/3210)
- [DatePipe](https://angular.io/api/common/DatePipe)
- debug: {{users | json}} :-)
- date: {{user.birthday | date:'short'}}
- price: {{product.price | currency:'EUR':'symbol':'1.2-2'}}
- using variable as pipe arguments:
  - price: {{product.price | currency:user.settings.currency:'symbol':'1.2-2'}}

# routing

- in `app.module.ts`
  - `import { RouterModule, Routes } from '@angular/router';`
  - `const routes: Routes = [ ...,  { path: 'movies/:id', component: MovieDetailPageComponent }, ... ]`
  - `imports: [ ..., RouterModule.forRoot(routes), ...],`
- in `app.component.html`
  - `... <router-outlet></router-outlet> ...`
- in component templates
  - `<a [routerLink]="['/restaurants', restaurant._id]">`
- in components, to read `:id` param
  - `import { ActivatedRoute } from '@angular/router';`
  - `constructor(... private route: ActivatedRoute ... )`
  - `this.route.params.subscribe((params) => { ... params.id ... }`
- in components, to navigate
  - `import { Router } from '@angular/router';`
  - `constructor(... private router: Router ... )`
  - `this.router.navigate(['/restaurants']);`
- 404 page
  - in `app.module.ts`
    - `{path: '**', component: NotFoundPageComponent}`
    
# services 
- [DOCS](https://angular.io/guide/component-interaction)
- [LU](http://learn.ironhack.com/#/learning_unit/2974)
- generate with `ng g s services/name`
- services are simple classes
- use services to:
  - keep your code DRY - a place to keep methods that are used by other services/components
  - store state that can be accessed/modified by other services/components
  - create observables that other services/components can subscribe too
- services are injectables
  ```
  @Injectable()
  export class RestaurantService {
  ```
  - you can ask Angular to provide an instance of service to the constructor of other services/components
  ```
  constructor(... private restaurantService: RestaurantService ...)
  ```
- services are singletons
  - Angular only creates one instance of each service (and only once some service/component requires its injection)
- services sould be small and follow SRP (single responsibility principle)
  - if making requests to a simple API, create one service with all the methods
  - if making requests to a larger API (e.g., your Node.js REST API) create one service per domain (e.g.: `auth`, `restaurants`, etc...)


# guards
- [DOCS](https://angular.io/guide/router#milestone-5-route-guards)
- [LU](http://learn.ironhack.com/#/learning_unit/3231)
- [CHEAT SHEET](./angular-auth/guards)
- generate with `ng g g guards/require-user`, etc.
- guards determine if the user is allowed or forbidden to access a certain route
- should only have one function `canActivate()`
  - `canActivate(): boolean` returns `true` (to allow) or `false` (to forbid) 
  - or `canActivate(): Promise<any>` returns a promise that rejects with `true` (to allow) or `false` (to forbid)
  - if returning/resolving with false, navigate somewhere else from within the guard
  ```
  this.router.navigate(['/']);
  return false;
  ```
- register the guards in each route of `app.module.ts`
  ```
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'page',  component: ... , canActivate: [ RequireUserGuard ] },
  ```
  - and add them to the providers list of `app.module.ts`
  ``` 
  providers: [...
    ...,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard,
    ...
  ],
  ```
- for authentication you will need 3 [guards](./angular-auth/guards):
  - `require-user` where a logged in user is required to access a route
  - `require-anon` where an anonymous user is required
  - `init-auth` where it's irrelevant whether the user is logged in or not (but we still want to initialize the auth service)

# http
- [DOCS](https://angular.io/guide/http)
- [LU](http://learn.ironhack.com/#/learning_unit/3222)
- [CHEAT SHEET](./angular-http/)
- in `app.module.ts`
  - `import { HttpClientModule } from '@angular/common/http';`
  - `imports: [ ..., HttpClientModule, ...],`
- in `**.service.ts`
  - `import { HttpClient } from '@angular/common/http';`
  - `constructor(... private httpClient: HttpClient ...) { }`
  - your service methods (e.g.: `getAll()`, `create(data)`) should return the underlying `HttpClient` promises
    - `return this.httpClient.METHOD...`
  - the `httpClient.get()` and `httpClient.delete()` methods take 2 arguments
    - `return this.httpClient.get('http://...', options)`
  - the `httpClient.put()` and `httpClient.post()` method take 3 arguments
    - `return this.httpClient.post('http://....', data, options)`
  - the `options` argument is always needed if making requests authenticated by cookies (e.g.: your Node.js REST API)
    - `const options = { withCredentials: true };`
    - without it, the HttpClient service does not send cookies in a CORS context
    - cookies are required to keep a session in the Rest API
   
