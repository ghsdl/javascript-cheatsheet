// factory functions
function createAddress(street, city, zipCode) {
    return {
        street: street,
        city: city,
        zipCode: zipCode
    }
}
const address = createAddress('Avenue des Mimosas', 'Ligné', 44850);
console.log(address);

// constructor functions
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