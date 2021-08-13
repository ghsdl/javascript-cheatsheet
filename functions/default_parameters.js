function interest(principal, rate = 3.5, years = 5) { // we can set the default value for functions parameters. once you give a default value the following parameters MUST HAVE one.
    return principal * rate / 100 * years;
}

const total = interest(1000);
console.log(total); // outpout : 1750