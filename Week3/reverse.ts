export{};

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers : number[] = [3, 4, 5, 6, 7]

let sortednumbers = numbers.filter(function(value: number, index: number){
return (value-index)
})

console.log(sortednumbers)
