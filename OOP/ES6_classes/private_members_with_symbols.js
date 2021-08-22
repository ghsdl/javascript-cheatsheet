const _radius = Symbol(); // symbol is a unique identifier
const _draw = Symbol(); // we use underline as our own convention to indicate that this is a private property

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(10);
console.log(Object.getOwnPropertySymbols(c)[0]);

// we can use Symbols to implement kind of private methods and properties
