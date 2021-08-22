const _radius = new WeakMap(); // weakmap is a dictionary where keys are objects and values can be anything
const _move = new WeakMap();

class Circle {
    constructor(radius) {
      _radius.set(this, radius);
      _move.set(this, /*function()*/ () => { // THIS will be inherited and not reset with an arrow function
          console.log('move.', this);
      });
    }

    draw() {
        //console.log(_radius.get(this));
        _move.get(this)(); // this returns a function so we call it right after
        console.log('draw.'); 
        // output : THIS is undefined, by default as opposed to the global object. to make it go away we use an arrow function.
    }
}
  
const c = new Circle(10);
c.draw(); // output : 10