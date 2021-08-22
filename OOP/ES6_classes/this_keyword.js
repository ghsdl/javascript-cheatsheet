// enabling strict mode. by default when using the class operator stric mode is enabled.
'use strict';

const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
};

const c = new Circle();
// method call : calling a method on an object
c.draw();

const draw = c.draw(); // getting a reference to this method
console.log(draw);

// function call : calling THIS like a standalone function not part of an object; by default THIS will point to the global object
draw(); // output : window object --- with strict mode : output is undefined
// 