# concepts

- Static Website
- Structure & Content (HTML) + Presentation (CSS) + Behaviour (JS)
- Programming + Runtime
- Events + Async
- Abstraction(s) + State
- Library & Framework


# javascript

## concepts

- run time environment
- program
- abstraction
- state
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
- instance
- constructor
- encapsulation
- inheritance
- composition

## types

- number: 1 1.3 Infinity NaN
- boolean: true false
- string: "hello world"
- object
- function
- undefined

## declarations

- `var x;`
- `var y = true;`

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
- precedence: [PEMDAS](http://materials.ironhack.com/s/SJeTS3zrYf#operator-precedence)
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
- arr.find( callback )
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

## dom

- window.document
- window.onload = function () { ... }
- document.body
- document.getElementById('site-header')
- document.getElementsByClassName('feature')
- document.querySelector('.features .feature')
- document.querySelectorAll('.features .feature')
- node.setAttribute('src', 'https://fakeimage.com/image.jpg')
- node.classList.add('active') node.classList.remove('active') node.classList.toggle('active')
- node.appendChild(child)
- node.children[0]...
- node.remove()
- node = document.createElement('div')
- node.innerHTML = `'<p>some text</p>'`
- node.innerText = 'some text'

## events

- node.addEventListener('click', handleClick);
- node.removeEventListener('click', handleClick);
- function handleClick(event) { ... }
- event.stopPropagation();
- event.preventDefault();
- event.target
- event.currentTarget

## async

- timeoutId = setTimeout(func, 1000)
- clearTimeout(timeoutId)
- intervalId = setInterval(func, 1000)
- clearInterval(intervalId)

## best practices

- start all files with  `'use strict';` [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- write small functions
- tidy code, idented and consistent
- DO
  - for literal strings, use `'single quotes'`
  - one statement per line (don't do `if (foo) { something() } ` all in one line)
  - variables and function parameters use `camelCase` (e.g.: `var topScores`)
  - functions, start with a verb, use `verbCamelCase` (e.g.: `function setPosition (x,y) {}`)
  - for constructors use `PascalCase` (e.g.: `function MovingObstacle() {}`)
- DON'T
  - use global variables
  - repeat yourself
  

# html/css

## html

- dom tree
- dom node
- root, ancestor, descendent, parent, child, sibling
- element type
- http://htmlcheatsheet.com/
- attributes and values
- block vs inline
- manipulation
- [events](https://developer.mozilla.org/en-US/docs/Web/Events)
- binding/unbinding event listeners

## css

- [syntax](https://ironion.com/blog/2015/06/12/anatomy-of-a-css-rule/)
  - rule
  - selector
  - declaration: property, value
  - shorthand property
  - specifity
  - pseudo-selector
- https://cssreference.io/
- and more:
  - user agent styles
  - reset
  - layout
  - typography
  - responsive web design
  - fluid layout
  - mobile first
  - box model
  - transition
  - animation
  - flexbox (and css grid...)

## best practices

- include `meta` to stop browser from zooming in `<head>`
- start your css with a reset of user-agent styles (at least box-model and body margin)
- conventions
  - use double quotes around html attributes
  - IDs and classes `kebab-case`
- MOBILE first
  - unless desktop only
- HTML first
  - sketch first
  - add ids/classes
  - div { border: 1px solid black } to visualise structure
  - CSS later
- DRY
  - use composition - e.g.: combine classes `class="article container"`
  - use cascading - specifics override generics
  - use inheritance - type attributes (font-family, font-size, line-height, color, ...) trickle down from parent to children
- SIMPLICITY
  - less is more
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


# git

- control version
- status
- staging
- commit
- remote
- branch
- merge


# tools

- linting
- beautifying

