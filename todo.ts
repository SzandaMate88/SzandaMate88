export{};

'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let first: string = 'My todo:\n';
let second: string = ' - Buy milk\n';
let third: string = ' - Download games\n';
let forth: string = '\t- Diablo';

todoText = first.concat(second).concat(third).concat(forth);

console.log(todoText);