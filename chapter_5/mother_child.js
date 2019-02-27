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

const ancestorsWithMothers = data.filter(p => !!p.mother)
const ancestorsWithMothersByName = byName(ancestorsWithMothers);

const ancestorsWithMotherData = data.filter(p => !!ancestorsWithMothersByName[p.mother])

const childMother = (array, ancestry) => {
  const obj = {};
  array.forEach(p => obj[p.name] = ancestry[p.mother]);
  return obj;
}

const motherOf = childMother(ancestorsWithMotherData, ancestorsWithMothersByName);

const ageDifferences = array => array.map(p => {
  return p.born - motherOf[p.name].born;
})

const avgBirthAge = average(ageDifferences(ancestorsWithMotherData));
console.log(avgBirthAge);
