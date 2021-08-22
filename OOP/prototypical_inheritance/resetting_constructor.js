function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate.');
}

// creating an object with a given prototype so that it inherits from the new prototype
Circle.prototype = Object.create(Shape.prototype);
// we can no longer create circle objects bases on his own constructor dynamically because we reset the prototype of the circle

// before 
new Circle(1) === new Circle.prototype.constructor(1);

// as best practice we should reset the constructor as well as the prototype of an object
Circle.prototype.constructor = Circle;

const shape = new Shape();
const circle = new Circle(1);