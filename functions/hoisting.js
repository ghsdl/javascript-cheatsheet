// we can call a function declaration before it is defined
walk(); // the reason is because the javascript engine calls the function declarations syntax to the top of the file => HOISTING

// function declaration
function walk() {
    console.log(walk);
} 

// can't call run before it's defined

run(); // Cannot access 'run' before initialization

// anonymous function expression 
let run = function() { 
    console.log(run);
}; 