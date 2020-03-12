let lineCount: number = 9;
let charCount: number = 7;
let whitespace: number = charCount - 2;
let char: string = '$';

for (let i: number = lineCount; i > 0; i--) {

  let row: string = '';

  if (i === lineCount || i === 1 ) {
    for (let j: number = charCount; j > 0; j--) {
      //row+='%'
      //row=row.concat('%')
      row = row.concat(char);
    }
  } else if (i !== lineCount && i !== 1) {
    row = row.concat(char);
    for (let j: number = whitespace; j > 0; j--) {
      if (lineCount === charCount){
        row = ''
      row = row.concat(char);}
      /* row = row.concat(' '); */
    }
    row = row.concat(char);
  }
  console.log(row);
}