// MY CODE
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2);
}

console.log(maxOfTwoNumbers(5, 10));

// SOLUTION
let number = max(5, 10);
console.log(number);

function max(a, b) {
    if (a > b) return a;
    else return b;
}

// ANOTHER SOLUTION
function max(a, b) {
    return (a > b) ? a : b;
}
