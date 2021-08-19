function Circle(radius) {
    // Instance members
    this.radius = radius;
    
    this.move = function() {
        console.log('move.');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw.');
}

const circle1 = new Circle(10);

circle1.draw();

// Returns only instance members
console.log(Object.keys(circle1)); // output : [ 'radius', 'move' ]

// Returns all members (instance + prototype)
for (let key in circle1) console.log(key);

circle1.hasOwnProperty('radius'); // output : true
circle1.hasOwnProperty('draw'); // output : false
