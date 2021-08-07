const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

// similar to const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];
console.log(combined);

// similar to const slice = combined.slice();
const copy = [...combined];
console.log(copy); 