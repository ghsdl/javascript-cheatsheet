// a prime number is a number whose factors are only 1 and itself, it cannot be divided evenly into another number

// 12 = 1, 2, 3, 4, 6, 12
// 12 can be divided evenly by its factors

// 11 = 1, 11
// 11 can only be divided by 1 or 11

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}

// function to determine if it's a prime number or not = reusable piece of code
function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) {
            return false;
        }
    return true;
}

showPrimes(15);