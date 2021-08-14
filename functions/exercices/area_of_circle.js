const cirlce = {
    radius: 1,
    get area() {  // read only property
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area); // ReferenceError: circle is not defined