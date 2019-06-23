function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partial) {
  let lengthOfName = partial.length;
  return drivers.filter(function(driverName) {
    return driverName.slice(0, lengthOfName) === partial;
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
