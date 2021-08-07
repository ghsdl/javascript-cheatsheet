const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) { // get the value only
    console.log(number);
};

for (let number in numbers) { // get the index only
    console.log(number);
};

numbers.forEach(function (number) { // get the value only
    console.log(number);
});

// arrow function syntax
numbers.forEach((number, index) => console.log(index, number)); // get both index and value