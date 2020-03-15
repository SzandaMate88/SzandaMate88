export{};

'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"
function putSaturn(array) {
  if ( array.index = "Jupiter") {
    array = array.concat(" Saturn");
  }else {
    return array;
  }
  [array[5],array[6],array[7]] = [array[7],array[5],array[6]];
return array;
}


console.log(putSaturn(planetList));

export = putSaturn;