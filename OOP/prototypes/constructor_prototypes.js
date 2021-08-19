Object.getPrototypeOf(myObj);
// myObj.__proto__ is the PARENT of myObj
// Constructor.prototype ()

function Circle(radius) {
    this.radius = radius;
    };

Circle.prototype // object that will be used as the parent for objects created by the circle constructor

// constructors also have prototype property

const cirlce = new Circle(10);