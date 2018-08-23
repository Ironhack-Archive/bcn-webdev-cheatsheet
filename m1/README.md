# concepts

- Static Website
- Structure & Content (HTML) + Presentation (CSS) + Behaviour (JS)
- User Agent & Compatibility
- Programming + Runtime
- Debugging
- API
- Events + Async
- Abstraction(s) + State
- Library & Framework


# html

- [MDN HTML guide](https://developer.mozilla.org/en-US/docs/Learn)
- [MDN HTML reference](https://developer.mozilla.org/kab/docs/Web/HTML)
- [LU](http://learn.ironhack.com/#/learning_unit/3015)

## html tools

- [Screen Reader](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn)
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/)
- [HTML Validator](https://validator.w3.org/#validate_by_input)

## html concepts

- DOM tree
- html, head & body
- DOM nodes: root, ancestor, descendent, parent, child, sibling
- [element types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- attributes and values `src="http://..."`
- block vs inline, as in `p` vs `strong`
- DOM API
  - manipulation
  - binding/unbinding [events](https://developer.mozilla.org/en-US/docs/Web/Events)

## html best practices

- [html 5 best practices](https://www.themelocation.com/best-html5-practices/)
- include `meta` to stop browser from zooming in `<head>`
- conventions
  - use double quotes around html attributes `src="http://..."`
  - IDs and classes in `class="kebab-case"`
- use outline/hierarchy:
  - h1, h2, ..., ul, li, p, strong
- use semantics:
  - nav
  - main
  - section
  - article
  - header
  - summary
  - details
  - figure
  - aside
  - figcaption
  - footer
  - mark
  - time
- use id and classes
  - e.g.: `id="site-header"`
  - e.g.: `class="card product"`
- DON'T
  - use only `<div>` and `<span>`
  - use `<br/>` unless poetry
  - add empty tags just because you need to apply some style
    - e.g.: `<div class="clear"></div>`


# css

- [MDN CSS guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
- [MDN CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
- [syntax](https://ironion.com/blog/2015/06/12/anatomy-of-a-css-rule/)
  - rule
  - selector
  - declaration: property, value
  - shorthand property
  - specifity
  - pseudo-selector
    - :focus
    - :hover
    - a:active
    - a:visited
    - :disabled
    - :nth-child(number)
    - :first-child
    - :last-child
- https://cssreference.io/
- and more:
  - user agent styles
  - reset
  - box model
  - layout
  - typography
  - responsive web design
  - fluid layout
  - mobile first
  - transition
  - animation
  - flexbox (and css grid...)

## positioning

- [demo](http://www.webdevbydoing.com/whats-the-difference-between-static-relative-absolute-and-fixed-positioning/)
- `position: relative`
  - used with `top/left` displaces the element (but the original space is still occupied)
  - establishes an anchor for absoulte descendent
- `position: absolute`
  - element complete leaves the flow
  - and looses its natural block ability of being `width 100%`
  - used with `top/left`, always relative to first `absolute` OR `relative` ancestor
- `position: absolute`
  - used with `top/left` always relative to `body`

## layout

- `.container`

## responsive

- flexbox
- `.container`

## css best practices

- code structure
  - reset first
    - at least reset the `box-sizing: border-box;` and body's `margin: 0;`
  - typography next
  - layout
    - at least `.container` class
  - components next
  - page specifics last
- KISS
  - avoid px widths,
  - avoid heights
  - margin bottom + padding top
- DRY
  - use hierarchy
    - `<div class="card"><div class="title">...`
    - target via `.card .title {}`
  - use composition
    - combine classes
    - `class="button primary"`  targeted via `.button.primary {}`
  - use cascading
    - specifics augment and override generics
    - `#login-button` stronger than`.button {}` stronger than `a {}`
    - `@media (...) { a {} }` stronger than `a {}`
  - use inheritance
    - type attributes (font-family, font-size, line-height, color, ...) trickle down from parent to children
- semantic:
  - semantic css, classes named after what things ARE not what they LOOK LIKE
    - e.g.: `.copy`, `.site-header`, `.copyright`, `.email` ...
- clearing floats
  - `overflow: hidden` on the parent
  - OR `clear: both` on a sibling after the floats
- DO
  - short selectors
    - e.g.: `.header li`
- DON't
  - use `!important`
  - name classes after presentation
    - e.g.: `.green-text {}`

# html+css process best practices

- [planning a simple website](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#Enter_HTML5_structural_elements#Planning_a_simple_website)
- mobile first
- unless desktop only
- sketch first
- identify patterns and components
- html next
- css last
- simplicity
- consistency


# javascript

- [MDN Javascript guide](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [MDN Javascript reference](https://developer.mozilla.org/bm/docs/Web/JavaScript)

## js concepts

- run time environment
- programming
- abstraction
- expression
- statement
- assignment
- declaration
- state
- type
- literal
- variable
- value
- control structure
- conditional
- loop
- algorithm
- debugging
- break-point
- function
- parameter
- scope
- return statement
- function call
- call arguments
- return value
- closure
- call stack
- data structure
- functional programming
- higher order functions
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
- undefined
- object
- function

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

## numbers

- Infinity
- -Infinity
- NaN === NaN
- Number constructor
  - Number('123')
  - Number('12a')
  - Number('')
- Number static
  - Number.MAX_VALUE
  - Number.isNaN(3 / window)
  - Number.isNaN(3 + window)
  - Number.isNaN(Number('x'))
  - Number.isInteger(3.1)
- funny thing about numbers
  - Number.isInteger(3 * (0.1 + 0.2) + 0.1)
  - 0.3 === 0.1 + 0.2

## Math
- Math.PI
- Math.max(1, 3)
- Math.random()
- Math.abs(-3)
- Math.sign(-3)
- Math.round(10 / 3)
- Math.ceil(10 / 3)
- Math.floor(10 / 3)
- 100 * Math.round(7.03) / 100
- Math.sqrt(10 / 3)
- Math.sin(Math.PI / 2)
- Math.cos(0)

## control structures

- if (expression) { ... } else if (expression) { ... } else { ... }
- for (initialize; condition; modify ) { ... }
- while (condition) { ... }
- do { ... } while (condition)
- switch (expression) { case "foo": ... ; break; }
- try { ... } catch (err) { ... }

## strings

- holds a list of characters
- str.length
- str[0]
- String()
- String static methods
  - String.fromCharCode(64)
- methods
  - str.split('');
  - str.toLowerCase()
  - str.substring(0,1)
  - str.indexOf('foo')
  - str.charCodeAt(1)


## arrays

- holds a list of values
- var arr = ['1', '2', '3'];
- var arr = new Array();
- arr.length
- arr[index]
- arr[index] = 'foo'
- array static methods
  - Array.isArray([])
- array methods
  - arr.join()
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
- for (var key in obj) { ... }
- Object static methods
  - Object.keys(obj);
  - Object.values(obj);

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

# browser API

- window
- window.innerWidth
- window.innerHeight
- window.location.href
- window.alert()
- window.prompt()
- window.scrollBy()

## dom

- window.document
- window.onload = function () { ... }
- document.body
- node = document.getElementById('site-header')
- node = document.getElementsByClassName('feature')
- node = document.querySelector('.features .feature')
- nodeList = document.querySelectorAll('.features .feature')
- node.setAttribute('src', 'https://fakeimage.com/image.jpg')
- node.removeAttribute('srcset');
- node.classList.add('active') node.classList.remove('active')
- node.classList.toggle('active')
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

## js best practices

- start all files with  `'use strict';` [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- write small functions
- start from the return
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


# git

- git is not github
- [commands](../tools/git/README.md)
- [docs](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- it's a version control system to
  - backup
  - share
  - track revisions

## git concepts

- status
- staging (add)
- commit
- remote (pull, push)
- branch
- merge

# tools

- linting
- beautifying

