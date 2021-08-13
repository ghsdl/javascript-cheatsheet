const person = {
    firstName: 'Maeva',
    lastName: 'Ghsdl',
    get fullName() { // getter to access the property
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) { // 
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'KiraetMallow Guiho'; // output : person object with the properties updated

// it's cleaner to implement a fullname method instead
// console.log(`${person.firstName} ${person.lastName}`);

console.log(person);

// the issue with the method approach is we can't update outside of the person object, it would be nicer to call the method as a property

// to access the fullName outside 
// we use getters to access properties
// setters to change and mutate the properties