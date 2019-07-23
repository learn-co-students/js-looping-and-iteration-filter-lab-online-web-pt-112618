function findMatching (array, name) {
   return array.filter(function (driver) {
     return driver.toUpperCase() === name.toUpperCase();
  });
};

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
};

function matchName (array, name) {
   return array.filter(function (driver) {
     return driver.name.toUpperCase() === name.toUpperCase();
  });
};
