const numbers = [3, 1,4, 2,5];

numbers.sort();
console.log(numbers); // output : [ 1, 2, 3, 4, 5 ]

numbers.reverse();
console.log(numbers); // output : [ 5, 4, 3, 2, 1 ]

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JS' } // if it was lowercase it would come second per ASCII table
];

courses.sort(function (a, b) {
    // excluding case sensitivy
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses); // output : [ { id: 2, name: 'JS' }, { id: 1, name: 'Node.js' } ]