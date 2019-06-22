// Code your solution in this file
function findMatching(drivers, name) {
  const result = []
  drivers.filter(function(driver) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      result.push(driver);
    }
  })
  return result;
}

function fuzzyMatch(drivers, letters) {
  const result = []
  drivers.filter(function(driver){
    if (driver[0] === letters[0]) {
      result.push(driver);
    }
  })
  return result;
}

function matchName(drivers, name) {
  const result = []
  drivers.filter(function(driver) {
    if (driver.name === name)
      result.push(driver)
  })
  return result;
}
