const message = 'This is my\n' + '\'first \' message';
console.log(message); // ugly and annoying

// object literals {}
// boolean literals true, false
// string '', ""

// ES6 brings template literals `` 
// we can use placeholders and use data dynamically

const another = `This is a 'better' message`;
console.log(another); // formatting the string the way we want it to look like

const name = 'Maeva';

const yam =
`Hi my name is ${name},

Thank you for getting back to me!

Best regards`;
console.log(yam);