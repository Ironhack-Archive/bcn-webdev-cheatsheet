// types in varible declarations
const myNumber: number = 1;
const myBoolean: boolean = false;
const myString: string = "typescript";
const myWhatever: any = {}; 
const myArray: Array<string> = ['a', 'b', 'c'];

// with let we can set value later
let timeoutId: number;

// types in functions
function myFunction(): void {
  console.log('this function "does not return"');
}

function sum(a: number, b: number): number {
  return a + b;
}



