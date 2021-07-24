// function will return the sum of all the multiple of 3 and 5 from 0 up to the limit

// multiples of 3: 3, 6, 9
// multiples of 5: 5, 10
function sum(limit) {
    let sum = 0;

    for (let index = 0; index <= limit; index++)
        if (index % 3 === 0 || index % 5 === 0)
            sum += index;
    
    return sum;
}

console.log(sum(52));