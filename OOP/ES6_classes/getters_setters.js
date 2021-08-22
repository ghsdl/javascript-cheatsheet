const _radius = new WeakMap();

class Circle {
    constructor(radius) {
      _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0)
            throw new Error('invald radius.');
        _radius.set(this, value);
    }
}

const c = new Circle(10);
const radius = c.radius;
console.log(radius); // output : 10