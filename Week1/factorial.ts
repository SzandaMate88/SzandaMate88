export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorial(a: number):number {
for ( let i: number = a; i > 0; i--){
  let b: number = i-1
  if (i === 1){
    return a
}else{
  a = (a*b)  
}
}
}
let j: number = factorial(6) 
console.log(j);