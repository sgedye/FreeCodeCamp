// Removing an element from an array (using splice):
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let index = 4;
let x = arr.splice(0, index); // 'move' the elements before the index to 'x'
let y = arr.splice(1, ); // 'move' the elements after the index to 'y'
console.log(x); //Output: [0,1,2,3]
console.log(y); //Output: [5,6,7,8,9,10,11]
console.log(arr); //Output: [4]
let indexRemoved = x.concat(y);
console.log(indexRemoved); //Output: [0,1,2,3,5,6,7,8,9,10,11]

