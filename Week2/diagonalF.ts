export{};

let lineCount: number = 6;
let rowCount: number = 6;
let char: string = '%';
let char2: string = '$'


for (let i: number = lineCount; i > 0; i--) {
  let symb: string = '';
  if ( i === lineCount || i === 1){
    symb = symb.concat(char);
  } else {
      symb = symb.concat(char2)
    }
  
  for (let j: number = 0; j < rowCount; j++) {
    if ( j != rowCount || j != 1 || j === lineCount){
      symb = symb.concat(char)
    }
  
    console.log(char);
}
 
    

}
