// MY CODEf

function isLandscape(width, height) {
   /* if (width > height) return true;
    return false;*/

    // amateur-ish, there is no need to explicitely return true or false
    //return (width > height) ? true : false;

    // SOLUTION
    // we can simply return the condition, the log will return true or false
    return (width > height);
}

console.log(isLandscape(650, 450));