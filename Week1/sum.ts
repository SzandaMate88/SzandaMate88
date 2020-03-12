export{};

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(a:number,b:number,c:number):number{
for(let i:number = 0; i <= c; i++) {
  if( i === c) {
    return a
  }else{
    a = (a+b)
    b += 1
  }
  
  
}

}let k:number = sum(0,1,5)
console.log (k)
