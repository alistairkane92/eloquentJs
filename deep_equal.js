const deepEqual = (a, b) => {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
  b == null || typeof b != "object") return false;

  for (let key in a){
    if (!deepEqual(a[key], b[key])){
      return false;
    }
  }

  for (let key in b){
    if (!deepEqual(a[key], b[key])){
      return false;
    }
  }

  return true;
}

// console.log(deepEqual(1, 1));
// console.log(deepEqual("Same", "Same"));
// console.log(deepEqual("Same", "Different"));
console.log(deepEqual({ apple: 1, orange: 2}, { apple: 1, orange: 2}));
console.log(deepEqual({ apple: 1, orange: 2, peanut: 3}, { apple: 1, orange: 2}));
console.log(deepEqual({ apple: 1, orange: 2}, { apple: 1, orange: 2, peanut: 3}));
