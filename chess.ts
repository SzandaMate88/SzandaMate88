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
let symb : string = '';

for ( let i: number = 8; i > 0; i--) {
  symb =''
  if( i % 2 != 0){
    symb = symb.concat('')
   
  } else if( i % 2 === 0 ) {
    symb = symb.concat('%')
    
  }
  for (let j : number = 8; j > 0;j--) {
    if ( j % 2 != 0) {
      symb = symb.concat(' ')
    } else if ( j %2 === 0) {
      symb = symb.concat('%')
    }
  }console.log(symb)

} 