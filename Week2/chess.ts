export{}
'use strict';

// Create a program that draws a chess table like this
//
// 
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lineCount : number = 8;
let rowCount : number = 8;
let char : string = '[]';

for (let i : number = 0; i<  8; i++){
  let symb : string = '';
  if (i %2 === 0) {
    symb = symb.concat(char);
    symb = '';
   }
  for(let j: number = 0; j< 8; j++){
    if((j+i)%2 !== 0) {
     symb = symb.concat(' ');
    }else{
      symb = symb.concat(char);
    }
  }console.log(symb);
}

