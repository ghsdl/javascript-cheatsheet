const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(function (value) { // if every element in an array matches the given criteria
    return value >= 0;
});

console.log(allPositive); // output : true 

const atLeastOnePositive = numbers.some(function (value) { // if at least one element matches the given criteria
    return value >= 0;
});

console.log(atLeastOnePositive); // output : true 