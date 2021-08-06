// the goal is to construct / create an object
// pascal case LikeThis

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
    return this;
}

const circle = new Circle(3);
// the NEW operator creates an empty object, then it will set THIS to point to this object and it will return the object from the function.