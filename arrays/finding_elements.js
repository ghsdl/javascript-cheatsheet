// finding elements : primitives

const numbers = [1, 2, 3, 4, 5, 1];

console.log(numbers.indexOf(1)); // 0
console.log(numbers.lastIndexOf(1)); // 5

// old method in javascript to check if an element is in an array
console.log(numbers.indexOf(1) !== -1); // true

// new method in javascript to check if an element is an array
console.log(numbers.includes(1));

// find elements : reference types

const courses = [
    { id: 1, street: 'a', city: 'b' },
    { id: 2, street: 'c', city: 'd' }
];

const course = courses.find(function (course) {
    return course.id === 1;
});

console.log(course);