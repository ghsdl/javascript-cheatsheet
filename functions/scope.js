const message = 'Hi!'; 
console.log(message);

// let and const are limited to their block in which they are defined
// if i put the const in a code block, output : message is not defined
{ 
    const message1 = 'Hi!';  
}
console.log(message1);

function start() {
    const message2 = 'Hi!';
    if (true) {
        const another = 'Bye!'; // another is accessible only in this block
    }

    console.log(another); // output : another is not defined
}

start();

console.log(message2);

// we can have a variable with the same name in two different functions because the scope is limited to the block in which it is defined

const color = 'black'; // the scope of this variable is GLOBAL. bad practice to define global variables or constant

// local variables (in a code block such as a function) take precedence over global variables