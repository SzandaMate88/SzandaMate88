export{};

/* Map introduction 1
We are going to play with maps. Feel free to use the built-in methods where possible.

Create an empty map where the keys are integers and the values are characters

Print out whether the map is empty or not

Add the following key-value pairs to the map

Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys

Print all the values

Add value D with the key 68

Print how many key-value pairs are in the map

Print the value that is associated with key 99

Remove the key-value pair where with key 97

Print whether there is an associated value with key 100 or not

Remove all the key-value pairs */

let map: {[key: number]: string} = {};

console.log(map);

map['97'] = ['a']; 
map['98'] = ['b'];
map['99'] = ['c']; 
map['65'] = ['A']; 
map['66'] = ['B']; 
map['67'] = ['C']; 

console.log(Object.keys(map));
console.log(Object.values(map));

map['68']= ['D'];


console.log(Object.keys(map).length);
console.log(map['99']);

delete map['97'];
console.log(map);

for(let i: number = Object.keys(map).length; i > 0; i--) {
  if (Object.keys(map)=== ['98'] ) {
    console.log('There is an element with the key 100');
  }else {
    console.log('There is no such key in the object');
  }
}

map = {};