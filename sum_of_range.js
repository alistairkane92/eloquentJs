const exitCriteria = (i, end, criteria) => {
  if (criteria) return (i <= end);
  if (!criteria) return (i >= end);
}

const range = (start, end, step = 1) => {
  let criteria;
  step < 0 ? criteria = false : criteria = true;

  const arr = [];
  for (let i = start; exitCriteria(i, end, criteria); i += step){
    arr.push(i);
  }
  return arr;
}

const sum = (numbers) => {
  let total = 0;
  for (number of numbers){
    total += number;
  }
  return total;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(10, -10, -2));
