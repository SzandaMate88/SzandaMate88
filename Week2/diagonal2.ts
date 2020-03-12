export { };
'use strict';



// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let rowCount: number = 6;
let char : string = '%';

for(let i: number = lineCount; i > 0; i--) {
  

let symb: string = '';

  for (let j: number = rowCount; j > 0; j--){
    if ( i === lineCount || i === 1 || j === rowCount )
    
    symb = symb.concat(char);
    else if ( i !== lineCount || i !== 1 || j !== rowCount){
      for (let k: number = 4; k > 0; k--){
        
        if ( j === i && k === 1 || i !== 4){
          /* symb = symb.concat(' '); */
         
          symb = symb.concat('$');

      

        }
      }
      /* symb = symb.concat(char);

      symb = symb.concat(' '); */
      
    }
    
  }console.log(symb)
 

  
}