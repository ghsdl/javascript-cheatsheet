let myFirstName = 'Maeva';
console.log(myFirstName);

// cannot be a reserved keyword
// should be meaningful and descriptive
// cannot start with a number
// cannot contain a space or hyphen
// camel notation is the javascript convention
// variables are case sensitive let firstName and let FirstName are different

let firstName = 'Maeva';
let lastName = 'Ghsdl';
console.log(firstName+ ' ' + lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

/*const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);*/
// SyntaxError: Identifier 'interestRate' has already been declared
// if you don't need to reassign use const, otherwise use let

// Primitive types : string, number, boolean, undefined and null
const myName = 'Maeva'; // string literal
const age = 30; // number literal
const isApproved = true; // boolean literal
const mySecondName = undefined;
const color = null;

// Dynamic typing
// a type of a variable can be changed. to check you can use typeof 
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof mySecondName); // its variable is undefined as well as its type 
console.log(typeof color);

// OBJECTS 
const person =  {
    name: 'Maeva',
    age: 30
};

// in an objecty you find properties: keys and values
// name and age are keys, maeva and 30 are values

console.log(person);
console.log(person.age);

// to access or log an object there is two ways

// dot notation
person.age = 33;
console.log(person.age);

// bracket notation
person['name'] = 'Marie';
console.log(person.name);

// use example of bracket notation if you don't know the target property at run time
const selection = 'name';
person[selection] = 'Thérèse';
console.log(person.name);

// ARRAYS
// data structure representing a list of items
const selectedColors = ['red', 'blue'];
// arrays have indexes we can access
console.log(selectedColors[0]);

// the length is dynamic
selectedColors[2] = 'grey';
selectedColors[3] = 14;
console.log(typeof selectedColors);

// an array will receive properties we can access, they are inherited
console.log(selectedColors.length);

// FUNCTIONS
//  set of statements that performsa task or calculate a value

function greet() {
    console.log('Hello World');
}

// call the function
greet();

// function can take parameters, even several of them
function greetings(name, lastName) {
    // concatenation
    console.log('Hello ' +  name + ' ' + lastName);
}

// call the function with an argument : the actual value we supply for the parameter
// greet('Maeva');
greetings('Lodie', 'Guiho');

// function that calculates  and returns a value
function square(number) {
    return number * number;
}

console.log(square(2));