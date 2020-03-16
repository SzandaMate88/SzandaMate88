export{};

'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(array : string[], array2: string[] ) {
  let matches: string[] = [];
  if (array.length >= array2.length) {
    array.forEach(function(value: String, index: number) {
      matches.push(array[index])
      if (array2[index] != undefined){
        matches.push(array2[index])
        
      }
    }) 
  

  }else{
    array2.forEach(function(value: string, index: number) {
      matches.push(array2[index])
      if (array[index] != undefined){
        matches.push(array[index])
      }
      
    })
  }return matches
    
  
}
console.log(makingMatches(girls, boys));

export = makingMatches;

