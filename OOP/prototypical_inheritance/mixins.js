// we can extract this logic  ==> Object.assign(Goldfish.prototype, canEat, canSwim) <== with a function
function mixin(target, ...sources) { // rest operator
    Object.assign(target, ...sources); // spread operator
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating.');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking.');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim.');
    }
}

function Person() {
}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {
}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
