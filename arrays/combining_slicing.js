const first = [1, 2, 3, 4];

const second = [5, 6, 7, 8];

const combined = first.concat(second); // both arrays returning in a new array

const slice = combined.slice(3, 5); // opposite to slice an array in two parts. 3 is the start and 5 the end of the index // output: [4,5]

console.log(combined);
console.log(slice);

const obj = [{ id: 1 }];
obj[0].id = 10;
console.log(obj); // output : [ { id: 10 } ]