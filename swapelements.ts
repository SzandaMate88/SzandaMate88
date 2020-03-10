export{};

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names =[];
names.push('Arthur','Boe', 'Chloe');
[names[0],names[2]] = [names[2],names[0]]


console.log(names)

/* [arr[0], arr[1]] = [arr[1], arr[0]]; */