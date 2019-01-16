function isEven(number){
  function minusTwo(n){
    if (n - 2 === 1 || n === 1){ return false }
    if (n - 2 === 0 || n === 0){ return true }
    return minusTwo(n - 2);
  }

  if (number < 0){
    number = number * -1;
  }

  return minusTwo(number);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
