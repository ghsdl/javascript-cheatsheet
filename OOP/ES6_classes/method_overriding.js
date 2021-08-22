class Shape {
    move() {
        console.log('move.');
    }
}

class Circle extends Shape {
    // we can override the move method and reimplementing here
    move() {
        super.move(); // overriding
        console.log('circle move.');
    }
}

const c = new Circle();