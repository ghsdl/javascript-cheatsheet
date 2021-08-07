// you can add or remove elements from an array

const numbers = [3, 4, 5];

// placed at the end of the array
numbers.push(6, 7);

// placed at the beginning of the array
numbers.unshift(1, 2);

// placed in the middle of the array
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);