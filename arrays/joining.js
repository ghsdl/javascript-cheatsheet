const numbers = [1, 2, 3, 4, 5];
const joined = numbers.join(',');
console.log(joined); // output : 1,2,3,4,5

const message = 'This is my message';
const parts = message.split(' ');
console.log(parts); // output : [ 'This', 'is', 'my', 'message' ]

const combined = parts.join('-');
console.log(combined); // output : This-is-my-message

// useful to build a URL slug for example