function powerOf(base, exponent){
  if (exponent == undefined)
    exponent = 2;
  let result = 1;
  for (let count = 0; count < exponent; count ++)
    result *= base;
  return result;
}

console.log(powerOf(4));
console.log(powerOf(4, 3));
