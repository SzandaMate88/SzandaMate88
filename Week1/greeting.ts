// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`


let nameToGreet: string = 'Green Fox';
let i: string = 'Greetings, dear';
function Greet(i:string, nameToGreet):string {
  return (i.concat(nameToGreet));
}
let j: string = Greet(i,nameToGreet);
console.log(j);