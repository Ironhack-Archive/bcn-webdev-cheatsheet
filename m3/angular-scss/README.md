# if you start from scratch

- https://scotch.io/tutorials/using-sass-with-the-angular-cli
- ng new my-sassy-app --style=scss

# if you want to convert an existing app

## update your angular-cli configuration (for ng serve, ng new, etc...)

Don't forget to restart `ng-serve` after this.

It will print some errors until you fix the following

// .angular-cli.json


    "styles": [
      "styles.scss" // - our main file converted to scss
    ],

    "defaults": {
      "styleExt": "scss", // - extension for components we generate next


## convert your main file to scss

// styles.css > styles.scss

@import './scss/variables.scss';

body {
  color: $color-body;
}



## convert your existing components to scss

// src/app/components/some.component.ts

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'] // <- changed the extension
})


// src/app/components/some.component.css > src/app/components/some.component.scss

@import '../../../scss/variables.scss';

h1 {
  color: $color-title;
}

## create your global scss files in a separate folder


// src/scss/variables.scss

$color-body: black;
$color-title: green;


