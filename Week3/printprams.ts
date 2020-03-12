export{};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(a: string, b: string): string {
  if (b != '') {
   a = a.concat(b);
  }
  return a;
}
let i : string = printParams('budos', ' sajt');
console.log(i);