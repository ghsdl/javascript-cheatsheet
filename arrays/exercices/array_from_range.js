const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let index = min; index <= max; index++) {
        output.push(index);
    }
    return output;
}