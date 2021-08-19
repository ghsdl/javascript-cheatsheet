let person = {
    firstName: 'Maeva'
};
console.log(person.toString()); // output : [object Object] wth all the prototypes available 

for (let key in person) {
    console.log(key); // ouput : firstName --> property
}

console.log(Object.keys(person)); // output : [ 'firstName' ] --> property

// properties have attributes attached to them, examples are GET and SET

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
/* output : descriptor object
{
  value: [Function: toString],
  writable: true, // we can overwrite a method
  enumerable: false, // not iterable
  configurable: true // we can delete something if we want to
}
*/

Object.defineProperty(person, 'firstName', {
    writable: false,
    enumerable: false, // if true : output : ['firstName']
    configurable: false
});

delete person.firstName;
console.log('Person', person); // firstName property is still there

person.firstName = 'Elodie'; // output : 'Maeva' because writable is false
//console.log('Person', person);
//console.log('Object.keys', Object.keys(person)); // output : empty array []