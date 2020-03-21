export{};

/* Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements */

let array: string[] = [];
console.log(array);
array.push('William');

console.log(array);

array.push('John');
array.push('Amanda');

array.forEach(Element => console.log(Element));

// remove 2nd element

array.splice(1, 1);

console.log(array);

array.reverse().forEach(Element => console.log(Element));

array.forEach(function(value: string, index:number) {
  array.splice(0, 4, '');
})

console.log(array);