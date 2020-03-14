export{};

'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let fix : string = "always takes longer than"
let quote1: string = quote.slice(0, -61);
let quote2: string = quote.slice(19,84);
quote= quote1.concat(fix).concat(quote2);

console.log(quote);