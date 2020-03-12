// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numbers = [];
numbers.push(1, 2, 3, 4, 5);


numbers = numbers.map((value:number, index: number, array:[]) => {
  if (index === 2) {
    let i: number = value+1;
    return i;
  }else {
    return value;
  }
}); 
console.log(numbers);
console.log(numbers[3]);