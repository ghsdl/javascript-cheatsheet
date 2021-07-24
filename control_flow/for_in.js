// FOR IN
// iterate over the properties of an OBJECT

const person = {
    name: 'Maeva',
    age: 33
};

for (let key in person) {
    // console.log(key);
    console.log(key, person[key]); // we use the bracket notation to get the value
    // we access the properties so : name, age
}

const colors = ['red', 'green', 'blue', 'purple'];

for (let index in colors) {
    // console.log(index);
    console.log(index, colors[index]); // we use the bracket notation to get the value
}