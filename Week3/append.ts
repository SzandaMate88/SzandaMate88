export{}

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)

let typo: string = 'kort';

function appendAFunc(typo: string, b: string) {
return typo.concat(b)
}
let j: string = appendAFunc(typo, 'e');
console.log(j);