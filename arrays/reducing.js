const numbers = [1, -1, 2, 3, 4, 5];

// old way
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);

// new way : loop through the array and convert in a single value
const result = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
console.log(result);

