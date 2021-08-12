const numbers = [1, 2, 3, 4, 5];

const max = getMax([1,2, 2, 3, 4, 5]); // if empty output : undefined

function getMax(array) {
    if (array.length ===0) return undefined;
    let max = array [0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > max)
            max = array[index];
    }
    return max;
}

//console.log(max);

// REDUCE METHOD

function getMaxReduce(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
}

console.log(max); // output : 5