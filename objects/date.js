// FIRST METHOD
const now = new Date();
console.log(now);
// SECOND METHOD
const date = new Date('May 21, 2016 08:00');
console.log(date);
// THIRD METHOD
const anotherDate = new Date(2016, 5, 21, 8, 0);
console.log(anotherDate);

//console.log(now.setFullYear(2017));
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
