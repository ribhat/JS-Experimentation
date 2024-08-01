// define variable
const name = 'Rish';
// name = 'George';   // Can only redefine variables, not constants
console.log(name);

//create an object
let person = {
    name: 'Rish',
    age: 30
}
console.log(person);


//2 ways to change attributes
person.name = 'John';
console.log(person);

person['name'] = 'Mary';
console.log(person);

//arrays (arrays are objects in JS)
let selectedColors = ['red', 'blue'];
selectedColors[2] = 3;
console.log(selectedColors);

//functions
function greet(name, lname) {
    console.log('Hello ' + name + ' ' + lname);
}

greet('John', 'Jacob');

function square(number) {
    return number * number;
}

let answer = square(2);
console.log(answer);