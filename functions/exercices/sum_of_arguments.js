function sum(...items) { // REST operator convert what we pass here as an array
    console.log(items); // an array of arrays 
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a,b) => a+b);
}

console.log(sum(1,2,3,4,5,6)); // output : 21
// console.log(sum([1,2,3,4,5,6])); // output : [ 1, 2, 3, 4, 5, 6 ]