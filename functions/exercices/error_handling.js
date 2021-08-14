function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurrences(null, 1); // output : erro message 'Invalid array.'
  console.log(count);
} catch (error) {
    console.error(error)
}
