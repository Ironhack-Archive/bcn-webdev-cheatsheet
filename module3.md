# concepts
- SPA
- Components
- Injection
- REST API

# typescript
- made by microsoft
- superset of javascript
- browser can NOT understand typescript
- transpiled down to es6 or es5 by tools
- types
  - type safety vs javascript dynamic types
  - can (should) be applied to:
    - constants and variables
    - function arguments
    - function return values
    - class properties
- interfaces
  - small reusables "contracts"
  - define what will be "public"
  - interfaces are also types (advanced)
- classes
  - concept of public vs private
  - properties documented before the constructor
  - class properties have types
  - class method arguments and return values have types
  - can implement more than one interface
  - all methods and fields are public by default
  - methods and fields can be declared as private
  - private, public shortcut on constructors
- decorators
  - can be applied to class, class property, class method, function param, getters/setters
  - 


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
- ng new
- ng serve
- ng g c components/...
- ng g c pages/...
- ng g s services/...
- ng g class models/...

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
- event binding `<button (click)="handleClick($event)">`
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
  


# templates
- *ngFor="let item of array"
- *ngIf="criteria"
- *ngForm
