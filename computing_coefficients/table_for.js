const tableFor = (eventToFind, journal) => {
  const hasEvent = (event, entry) => {
    return entry.events.indexOf(event) != -1
  }

  let table = [0, 0, 0, 0];

  journal.forEach(entry => {
    let index = 0;
    if (hasEvent(eventToFind, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  })

  return table
}

module.exports = tableFor;
