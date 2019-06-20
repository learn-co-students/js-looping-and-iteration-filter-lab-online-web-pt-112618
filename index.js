function findMatching(driversArr, str) {
	return driversArr.filter(function (name) {
		return name.toLowerCase() === str.toLowerCase();
	});
}

function fuzzyMatch (list, partial) {
  let lengthOfName = partial.length;
  return list.filter(function (driver) {
    return driver.slice(0, lengthOfName) === partial;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}