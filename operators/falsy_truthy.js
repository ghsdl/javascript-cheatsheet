// Falsy values (false)
// undefined 
// null 
// 0 
// false
// '' (empty string)
// NaN (not a number)

// anything that is not falsy is truthy

false || 'Maeva' 
// because it's the OR operator, as long as one of them is TRUE it will be true
// > not an empty string so it's truthy

false || 1
// 1 is not a boolean or 0, it's truthy so 1 is returned

false || 1 || 2 
// returns 1 because it stops when it finds a truthy operand, here 1
// this is short-circuiting

let userColor = undefined; // blue 
// let userColor = 'red'; // red
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
// if a value exists for userColor we're gonna use it
// if we don't we'll use defaultColor

console.log(currentColor);