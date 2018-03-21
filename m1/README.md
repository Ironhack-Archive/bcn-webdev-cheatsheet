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

## types

- number: 1 1.3 Infinity NaN
- boolean: true false
- string: "hello world"
- object
- function
- undefined

## operators

- [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison): `== === != !== > < >= <=`
- [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical): `&& || !`
- logical and short-circuit: 
  - `0 && notExecuted` evaluates to `0`
  - `1 || notExecuted` evaluates to `1`
- [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String) `+`
- [arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic): `+ - * / % ** ++ --`
- [bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise): `& | ^ ~ << >> >>>`
- [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment): `= += -= *= /= %= **=`
- [trenary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional): `var a = (condition) ? this : orThat`
- precedence: PEMDAS
- unary 
  - typeof `typeof var`
  - delete `delete var.property`
  - in `property in obj`
  - instanceof `var instanceof Constructor`

## control structures

- if (expression) { ... } else if (expression) { ... } else { ... }
- for (initialize; condition; modify ) { ... }
- while (condition) { ... }
- do { ... } while (condition) 
- switch (expression) { case "foo": ... ; break; }
- try { ... } catch (err) { ... } 

## arrays

- holds a list of values
- var arr = ['1', '2', '3'];
- var arr = new Array();
- arr.length
- arr[index]
- arr[index] = 'foo'
- arr.pop()
- arr.push('4', '5')
- arr.unshift('foo')
- arr.shift()
- arr.forEach( callback )
- arr.map( callback )
- arr.reduce( callback )
- arr.filter( callback )
- arr.sort( callback )
- arr.reverse()
- arr.splice(1, 2)
- arr.splice(1, 0, 'foo')
- arr.slice(1, 2)

## objects

- holds key value pairs
- var obj = { name: 'foo' }
- obj.name = 'foo'
- obj['name-with-weird-characters'] = 'foo'
- obj[key] = 'foo'
- delete obj.name
- delete obj['name-with-weird-characters']
- delete obj[key]
- Object.keys(obj);
- Object.values(obj);
- for (var key in obj) { ... }

## functions

- function doSomething(param1, param2) { return .... }
- var doSomething = function (...) { ... } 
- typeof doSomething // 'function'
- advanced:
  - function doFoo() { console.log(arguments) }
  - function doFoo() { console.log(this) }
  - doFoo.call(otherThis, arg1, arg2)
  - doFoo.apply(otherThis, [arg1, arg2])
  - dooFoo.name

# best practices

## javascript

- start all files `'use strict';` [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- small functions
- conventions 
  - literal strings, use `'single quotes'`
  - one statement per line (don't do `if (foo) { something() } ` all in one line)
  - variables and function parameters use `camelCase` 
  - functions, start with a verb, use `verbCamelCase`
  - for constructors use `PascalCase`

## html/css

- include `meta` to stop browser from zooming in `<head>`
- start your css with a reset of user-agent styles (at least box-model and body margin)
- conventions
  - use double quotes
  - IDs and classes `kebab-case`
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
