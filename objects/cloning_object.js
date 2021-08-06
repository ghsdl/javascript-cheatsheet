const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// FIRST METHOD
const another = {};
for (let key in circle) {
    another[key] = circle[key];
}
console.log(another);

// SECOND METHOD
const yetAnother = Object.assign({
    color: 'Yellow'
}, circle);
console.log(yetAnother);

// THIRD METHOD
const other = { ...circle }; // simplest to clone an object: SPREAD operator
console.log(other);