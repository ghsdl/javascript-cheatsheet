function Address(street, city, zipCode) {
    this.myAddress = function () {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
    return this;
}

const myAddress = new Address('Avenue des Mimosas', 'Ligné', 44850);
console.log(myAddress);

const anotherAddress = new Address('Avenue des Mimosas', 'Ligné', 44850);
console.log(anotherAddress);

function areEqual(myAddress, anotherAddress) {
    return myAddress.street === anotherAddress.street && myAddress.city === anotherAddress.city && myAddress.zipCode === anotherAddress.zipCode;
}
console.log(areEqual(myAddress, anotherAddress)); // TRUE

function areSame(myAddress, anotherAddress) {
    return myAddress === anotherAddress;
}
console.log(areSame(myAddress, anotherAddress)); // FALSE