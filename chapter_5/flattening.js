const test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatten = (arr) => arr.reduce((acc, currentValue) => acc.concat(currentValue));

console.log(flatten(test));
