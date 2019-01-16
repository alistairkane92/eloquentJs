function min(a, b){
  if (a === b) return null;
  return ((a - b < 0) ? a : b);
}

console.log(min(0, 3));
console.log(min(8, 2));
console.log(min(-5, 5));
console.log(min(3, -7));
console.log(min(7, 7));
