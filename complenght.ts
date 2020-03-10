export{}

  // - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "p2 is longer" to the console if `secondList` has more elements than
//   `firstList`

let firstList = [];
let secondList = [];
firstList.push(1,2,3);
secondList.push(4,5);
let txt: string = 'így is jó'

if( firstList.length > secondList.length){
  let output : string = '';
  output = output.concat(txt)
  console.log(output)
}
