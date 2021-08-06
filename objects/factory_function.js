// factory functions produce objects
// camel case likeThis

function createCircle(radius) {
    // instead of returning at the end we can return immediately
    return {
        // when the key and value are the same we can just write the same word once i.e radius
        radius,
        // calling a function in an object doesn't need the draw: function () {} syntax
        draw() {
            console.log('draw');
        }
    };
}

// we defined the logic in one place only
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);