export{};
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8, 7];

function containsSeven(array: number[]) {
 if (Object['values'](array) === '7'){
   console.log('Hoorray');
 }else{
   console.log('Nooooo')
 }
}
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;