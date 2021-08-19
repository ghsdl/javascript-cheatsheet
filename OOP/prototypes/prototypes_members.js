function Circle(radius) {
    // instance properties and methods : INSTANCE MEMBERS
    this.radius = radius;
    
    // we can reference an instance member in a prototype member
    this.move = function() {
        // we call this method which is not an instance method but the JS engine will find this method on the prototype
        this.draw();
        console.log('move.');
    }
}

// we can take the draw method out of the circle object and put it in its own prototype
// Circle.prototype ===  circle1.__proto__ (the second part is deprecated)

// PROTOTYPE MEMBERS
Circle.prototype.draw = function() {
    console.log('draw.');
}

const circle1 = new Circle(10);
console.log(circle1);

const circle2 = new Circle(10);
console.log(circle2);

Circle.prototype.toString = function() { // we can use circle1.toString() because we implemented the prototype
    return 'Circle with radius ' + this.radius;
}

