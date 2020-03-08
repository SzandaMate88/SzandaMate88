'use strict';
export { };




// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let charCount: number = 6;
let whitespace: number = charCount - 2;
let row: string = '';
let char: string = '%';
let side: string = '%    %';

for (let i: number = lineCount; i > 0; i--) {

  if (i === lineCount || i === 1 ) {
    row='';
    for (let j: number = charCount; j > 0; j--) {
      //row+='%'
      //row=row.concat('%')
      row = row.concat(char);
    }
  } else {
    row = side;
  }
  console.log(row);
}






