let numbers = [1, 2, 3, 4, 5];

//reassigning the variable
numbers = []; // works if we do not have another references to the original array like "let another = numbers"

// truncating the array
numbers.length = 0;

// the SPLICE method
numbers.splice(0, numbers.length);

// the POP method
while (numbers.length > 0) {
    numbers.pop();
}

console.log(numbers);