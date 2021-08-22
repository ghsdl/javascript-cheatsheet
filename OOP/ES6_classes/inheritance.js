class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move.');
    }
}

// we can just add the extends keyword to create inheritance
class Circle extends Shape {
    // if we have a constructor in the parent class we need the super keyword in the child class to reference the parent object
    constructor(color) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw.');
    }
}

const c = new Circle(10);
const cc = new Circle('red');
console.log(c); // output : our Circle {}
console.log(cc); // output : Circle { color: 'red' }