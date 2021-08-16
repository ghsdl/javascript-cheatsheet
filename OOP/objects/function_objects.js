function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

console.log(Circle.constructor );
const another = new Circle(1);

// FUNCTIONS ARE ALSO OBJECTS