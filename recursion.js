let run = 0;
let recursiveReturn = 0;

function power(base, exponent) {
  run++;
  console.log('Base:', base, 'Exponent:', exponent, 'Run', run);
  if (exponent == 0){
    console.log('Exponent is', exponent, 'returning 1');
    return 1;
  } else {
    let newFunction = power(base, exponent - 1);
    recursiveReturn++;
    console.log('Accumulating value', newFunction, 'recursiveReturn', recursiveReturn);
    return base * newFunction;
  }
}

console.log(power(2, 3));
