export{};

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers = [];
numbers.push(1, 2, 3, 8, 5, 6);
let sortedNumbers: number[] = numbers.sort(compare);

function compare(a: number, b: number):number{
  return a-b
}
console.log(sortedNumbers);








