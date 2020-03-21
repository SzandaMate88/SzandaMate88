export{};

let fs = require('fs')

let file = fs.readFileSync('./candyShop.ts', 'utf-8');

console.log(file)