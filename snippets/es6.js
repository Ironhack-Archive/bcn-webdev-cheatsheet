// -- ARROW FUNCTIONS --
function doSomething('someparam', (param1, param2) => {
    ...
    return result;
});

const arr = [1,2,3,4];
arr = arr.map((item) => item + 1);

// -- CLASSES AND INHERITANCE --
class Foo {
    constructor(param1) {
        this.prop1 = param1;
    }
    method1 () {
        ...
    }
}

class Foo extends Bar {
    constructor(param1, param2) {
        super(param1, param2)
    }
    ...
}

// -- OBJECT SHORTCUT --
const name = "foo";
const obj = {name};
console.log(obj.name); // "foo"


// -- TEMPLATE (AND MULTILANE) STRINGS
const name = "joe"
const text = `
    <p>hello ${name}</p>
`;
