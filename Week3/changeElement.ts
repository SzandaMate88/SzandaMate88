export{};

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let sortedNumbers: number[] = [1, 2, 3, 8, 5, 6]



let finalNum: number[]=sortedNumbers.map((value: number, index: number) =>{
  if(value === 8){
    return 4
  }else{
    return value
  }
})
console.log(finalNum)