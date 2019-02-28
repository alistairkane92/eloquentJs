const ANCESTRY_FILE = require('./ancestry');

const data = JSON.parse(ANCESTRY_FILE);

const average = (array) => {
  const plus = (a, b) => a + b;
  return array.reduce(plus) / array.length;
}

const byName = (array) => {
  const result = {};
  array.forEach(p => result[p.name] = p);
  return result;
}

const getAgeDifferences = (array, ancestry, f) => {
  const birthingAges = (acc, person) => {
    if (!ancestry[person.mother]) return acc;
    const ageDifference = person.born - ancestry[person.mother].born;
    acc.push(ageDifference);
    return acc;
  }

  return f(array.reduce(birthingAges, []));
}

console.log(getAgeDifferences(data, byName(data), average));
