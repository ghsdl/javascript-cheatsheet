// avoid extending the built-in objects

Array.prototype.shuffle = function() {
    // ...
};

const array = [];
array.shuffle();
// but we should not modify the built-in objects in javascript
// don't modify objects you don't own 
// don't overwrite methods, don't remove methods or don't add new methods (or properties)