// AND (&&)
// returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(false && true); // false

let highIncome = true;
let creditScore = true;
let eligibleClient = highIncome && creditScore;
console.log(eligibleClient); // true

// OR (||)
// returns TRUE if one of the operands is TRUE

let income = false;
let goodCreditScore = false;
let eligibleForLoan = income || goodCreditScore;
//console.log(eligibleForLoan); // true if one of them is set to true
// as long as we have at least one operand it'll be TRUE
console.log(eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
// if eligibleForLoan the NOT operator will convert that variable to false
console.log(applicationRefused);