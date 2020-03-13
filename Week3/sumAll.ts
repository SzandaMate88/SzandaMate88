export{};

// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console

let numbers: number[] = [3, 4, 5, 6, 7];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator+currentValue;
},0);
console.log(sum);


