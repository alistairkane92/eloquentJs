const JOURNAL = require('./journal.js');
const phi = require('./phi.js');
const tableFor = require('./table_for.js')

const findCoefficients = (journal) => {
  const map = {};

  journal.forEach(entry => {
    const events = entry.events;
    events.forEach(event => {
      if (!(event in map)){
        const table = tableFor(event, journal);
        const phiResult = phi(table);
        map[event] = phiResult;
      }
    })
  })

  return map;
}

const journalCoefficients = findCoefficients(JOURNAL);
for (event in journalCoefficients){
  console.log(event + ' has a coefficient of ' + journalCoefficients[event]);
}
