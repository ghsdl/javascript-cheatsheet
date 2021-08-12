const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
} 

console.log(count);