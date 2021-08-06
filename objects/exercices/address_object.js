const address = {
    street: 'Avenue des Mimosas',
    city: 'Ligné',
    zipCode: 44850
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

console.log(showAddress(address));  