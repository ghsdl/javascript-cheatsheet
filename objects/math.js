
// all properties and methods of Math are static

const randomNumber = Math.random();
console.log(randomNumber);

function arbitraryNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(arbitraryNumber(15, 150));

const roundNumber = Math.round(1.6);
console.log(roundNumber);

const maxNumber = Math.max(1, 65, 45, 89, 75, 251);
console.log(maxNumber);

const minNumber = Math.min(1, 65, 45, 89, 75, 251);
console.log(minNumber);