// function declaration
function walk() {
    console.log(walk);
} // no semi colon

// anonymous function expression 
let run = function() { // a function with no name, run references that function
    console.log(run);
}; // semi colon

let move = run;
run();
move();