const person = {
    firstName: 'Maeva',
    lastName: 'Ghsdl',
    set fullName(value) { 
        if (typeof value !== 'string')
            throw new Error('Value is not a string.'); // creating a new error object

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.'); // when you throw an error the lines after are not executed, the engine will move to the catch block
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    // person.fullName = null; // output : we get the original person objet with the original name and last name
    person.fullName = '';
} catch (error) {
    console.error(error)
}


console.log(person);