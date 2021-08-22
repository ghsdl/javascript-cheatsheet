class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('draw.');
    }
}

const circle = new Circle(10);

// classes in ES6 enforce the use of the NEW operator