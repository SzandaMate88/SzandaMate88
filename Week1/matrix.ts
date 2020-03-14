export{};

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let lineCount : number = 4;
let rowCount : number = 4;
let symb1 : string = '0';
let symb2 : string = '1';


for (let i = 0; i < lineCount ; i++) {
  let output : string = '';
  for (let j = rowCount; j > 0; j--) {
    if ( j != (i+1) ) {
      output = output.concat(symb1);
    } else {
      output = output.concat(symb2);
    }
  }console.log(output);
 } 

