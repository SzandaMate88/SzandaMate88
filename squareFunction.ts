'use strict';
export { };


function printMySquare(lineCount: number, charCount: number, char: string): void {
// void is the return type
  const whitespace: number = charCount - 2;

  for (let i: number = lineCount; i > 0; i--) {
    
    let row: string = '';
  
    if (i === lineCount || i === 1 ) {
      for (let j: number = charCount; j > 0; j--) {
        row = row.concat(char);
      }
    } else if (i !== lineCount && i !== 1) {
      row = row.concat(char);
      for (let j: number = whitespace; j > 0; j--) {
        row = row.concat(' ');
      }
      row = row.concat(char);
    }
    console.log(row);
  }
}

printMySquare(9,7,'$')