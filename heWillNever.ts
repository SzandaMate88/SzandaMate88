export{};
'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
let string = notSoCrypticMessage.toString()

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};
let hasString = hashmap.toString()

function decode(a: string, b: string, array) {
  let decoded : string = ''
  if (a = b){
    decoded = decoded.concat(b)
  }else{
    return decoded
  }
  
}
 let output: string = decode(string,hasString, Array)
console.log(output)


  


console.log(out)