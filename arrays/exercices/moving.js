const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 1);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...numbers];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}


console.log(output); // output : [ 1, 3, 2, 4 ]