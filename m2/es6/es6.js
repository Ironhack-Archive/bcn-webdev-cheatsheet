// -- arrow functions

const doSomething = (param1, param2) => {
    return param1 + param2;
};

const arr = [1, 2, 3, 4];
const newArr = arr.map((item) => item + 1);

// -- classes and inheritance

class Foo {
    constructor(param1) {
        this.prop1 = param1;
    }
    method1() {
        console.log('method 1');
    }
}

class Bar extends Foo {
    constructor(param1, param2) {
        super(param1, param2)
    }
    method1() {
        console.log('method 1 redefined by Bar');
    }
    method2() {
        console.log('method 2 added by Bar');
    }
}

// -- object shorthand property names

const name = "foo";
const obj = { name };
console.log(obj.name); // "foo"


// -- template (and multiline) strings

const name = "joe"
const text = `
    <p>hello ${name}</p>
`;


// -- destructuring

const person = {name: 'Joe', age: 33};
let {name, age} = person;
console.log(name, age); // Joe 33


