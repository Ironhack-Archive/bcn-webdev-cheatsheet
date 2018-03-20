# concepts

## web

- browser
- frontend/backend
- static website
- separation of concerns
  - structure: html
  - presentation: css
  - behaviour: js

## concepts js
- run time environment
- expression
- statement
- assignment
- declaration
- type
- literal
- variable
- control structure
- conditional
- algorithm
- function
- argument
- scope
- debugging
- breakpoint
- closure
- callback
- context
- prototype
- object oriented programming
- encapsulation
- inheritance
- composition

## concepts html
- dom tree
- dom node
- root, ancestor, descendent, parent, child, sibling
- element type
- attribute
- block vs inline
- manipulation
- events
- binding/unbinding event listeners

## concepts css
- [syntax](https://ironion.com/blog/2015/06/12/anatomy-of-a-css-rule/)
  - rule
  - selector
  - declaration: property, value
  - specifity
  - pseudo-selector
- and more: 
  - user agent styles
  - reset
  - layout
  - typography
  - responsive web design
  - liquid
  - mobile first
  - box model
  - transition
  - animation
  - flexbox (and css grid...)

## concepts git
- control version
- status
- staging
- commit
- remote
- branch
- merge

## concepts tools
- linting
- beautifying

# javascript

- var x = 1;
- types:
  - number: 1 1.3 Infinity NaN
  - boolean: true false
  - string: "hello world"
  - object
  - function
  - undefined
- arithmetic operators: `+ - * / % **`
- assignment operators: `= += -= *= /= %= **=`
- boolean operators: `&& || !`
- operator precedence: PEMDAS
- typeof operator
- control structures:
  - if (expression) { ... } else { ... }
  - for (initialize; condition; modify ) { ... }
  - while (condition) { ... }
  - do { ... } while (condition) 
  - switch (expression) { case "foo": ... ; break; }


# best practices

## html/css

- MOBILE first
  - unless desktop only
- HTML first
  - sketch first
  - add ids/classes 
  - div { border: 1px solid black } to visualise structure
  - css later
- DRY
  - use composition - e.g.: combine classes `class="article container"` 
  - use cascading - specifics override generics
  - use inheritance -  
- LESS is MORE
  - avoid px widths, 
  - avoid heights
  - margin bottom / padding top
- DO
  - semantic html, the right tags for the right job
    - e.g.: `nav`, `header`, `ul`, `strong`
  - semantic css, classes named after what things ARE not what they LOOK LIKE
    - e.g.: `.copy`, `.site-header`, `.copyright`, `.email` ...
  - solve problems / compensate as close as possible to the origin of the problem
  - short selectors
    - e.g.: `.header li`
- DON'T
  - use only `<div>` and `<span>`
  - use `<br/>` unless poetry
  - use `! important`
  - name classes after presentation
    - e.g.: `class="green-text"`
  - add empty tags just because you need to apply some style
    - e.g.: `<div class="clear"></div>`
  - long selectors
    - e.g.: `.header div ul li`
- clearing floats
  - `overflow: hidden` on the parent
  - OR `clear: both` on a sibling after the floats
