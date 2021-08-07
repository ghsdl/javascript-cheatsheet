const numbers = [1, -1, 2, 3, 4, 5];

const mapped = numbers.map(number => '<li>' + number + '</li>'); // mapping each element of an array into something else : mapping numbers to strings
const html = '<ul>' + mapped.join('') + '</ul>'; // adding the ul element

const object = numbers.map(number => ({ value: number }) );

console.log(mapped); // output : ['<li>1</li>','<li>2</li>','<li>3</li>','<li>4</li>','<li>5</li>']
console.log(html); // output : <ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
console.log(object); // output : [ { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]

// methods can be chained
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(items);