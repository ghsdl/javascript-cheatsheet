
function sum(discount, ...prices) { // REST operator will take ALL of the arguments and put them in an array
    const total = prices.reduce((a,b ) => a+b);
    return total * (1 - discount);
}

// the REST operator should always be the last parameter in a function
console.log(sum(0.1, 20, 30, 1)); 