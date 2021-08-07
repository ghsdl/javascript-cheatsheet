const numbers = [1, 2, 3, 4, 5];

// removed from the end of the array
const last = numbers.pop();
console.log(numbers);
console.log(last);

// removed from the beginning of the array
const first = numbers.shift(1, 2);
console.log(first);
console.log(numbers);

// removed from the middle of the array
const middle = numbers.splice(2, 2);
console.log(middle);