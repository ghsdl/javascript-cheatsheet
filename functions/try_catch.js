const person = {
    firstName: 'Maeva',
    lastName: 'Ghsdl',
    set fullName(value) { 
        if (typeof value !== 'string')
            throw new Error('Value is not a string.'); // creating a new error object

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = null; // output : we get the original person objet with the original name and last name

console.log(person);