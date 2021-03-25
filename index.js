// Code your solution here
function findMatching(driv, nameMatch) {
    return driv.filter( drivMatch => drivMatch.toUpperCase() === nameMatch.toUpperCase());
  }
  
  function fuzzyMatch(driv, letters) {
    return driv.filter( drivMatch => drivMatch.toUpperCase().indexOf(letters.toUpperCase()) === 0);
  }
  
  function matchName(driv, nameMatch) {
    return driv.filter( drivMatch => drivMatch.name === nameMatch);
  }