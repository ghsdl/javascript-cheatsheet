// MY CODE

function myFizzBuzz(input) {
    // if the number is divisible by 3 => fizz
    // if (input / 3 ) return 'Fizz'
    // if the number is divisible by 5 => buzz
    // if (input / 5) return 'Buzz'
    // if the number is divisible by both 3 and 5 => FizzBuzz
    // if (input / 3 && 5) return 'FizzBuzz'
    // not divisible nor 3 or 5 we get => input 
    // if (input !== / 3 && 5) return input
    // not a number => 'Not a Number'
    if (input !== 'number') return 'Not a Number'
}

const myOutput = myFizzBuzz('17');
console.log(myOutput);

// SOLUTION
function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';

    if (input % 3 === 0) return 'Fizz';

    if (input % 5 === 0) return 'Buzz';
    
    return input;
}

const output = fizzBuzz(7);
console.log(output);