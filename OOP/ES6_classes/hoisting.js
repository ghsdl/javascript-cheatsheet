// we can call sayHello() BEFORE the declaration; it's hoisted

sayHello();

// function declaration
function sayHello() {}

// function declaration are raised to the top of the code

// function expression
const sayGoodbye = function() {};

console.log(number); // number is not defined
// function expression cannot be put at the top of the code
const number =1; 

// class declaration
class Circle {
}

// class expression
const Square = class {
}

// unlike expressions, class expressions or class declarations are NOT hoisted
// cannot create a circle object before the class declaration