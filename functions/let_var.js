// with var keyword when you declare a variable its scope is not limited in the block in which it is defined, the scope is limited to the function.

function start() {
    for (var i = 0; i < 5; i++) { // if we replace var with let, we'll get an error
        console.log(i);
    }
    console.log(i);
}

start(); // output : 0 1 2 3 4 5

var color = 'black';
let age = 30; // not attached to the window object

function sayHello() {
    console.log('Hi!'); // global function attached to the window object === bad practice
}