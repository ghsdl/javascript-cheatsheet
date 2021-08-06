// VALUE TYPES (primitives)
/*
number
string
boolean
symbol
undefined
null
*/

// REFERENCE TYPES
/*
object
function
array
*/

let x = 10;
let y = x;

x = 20;

// x and y are two independent variables
console.log(x); // 20
console.log(y); // 10

let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a.value);
console.log(b);

// when we use an object, it's not stored in the variable a, it's stored somewhere else in the memory and the adresse of that memory is stored in the variable

// both a and b are pointing to the same object stored in the memory

// Primitives are copied by their VALUE
// Objects are copied by their REFERENCE

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // 10 

// SAME THING WITH OBJECT
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // 11 