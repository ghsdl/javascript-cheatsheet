const courses = [
    { id: 1, street: 'a', city: 'b' },
    { id: 2, street: 'c', city: 'd' }
];

const course = courses.find(course => course.id === 1); // finding a course with the id equal to 1

console.log(course);