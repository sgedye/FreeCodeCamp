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

//Note: This also produces the same result:
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let index = 4;
let x = arr.splice(index, 1);
console.log(x); //Output: [4]
console.log(arr); //Output: [0,1,2,3,5,6,7,8,9,10,11]


/** Objects (inc. arrays) pass by reference, not value **/
// DONT DO THIS //
const FOOD = ["pie", "pizza", "pineapple"];
function addFood (FOOD, newFood) {
  let myFood = FOOD;
  myFood.push(newFood);
  return myFood;
}
let newList = addFood(FOOD, "cheese");
console.log(FOOD); //Output: ["pie", "pizza", "pineapple", "cheese"]
console.log(newList); //Output: ["pie", "pizza", "pineapple", "cheese"]

// DO THIS //
const bookList = ["GoT", "LotR", "R+J", "The little book of calm"];
function add (bookList, bookName) {
  let myBookList = [];
	Object.assign(myBookList, bookList);
	myBookList.push(bookName);	
  return myBookList;
}
var newBookList = add(bookList, 'A Brief History of Time');
console.log(bookList); //Output: ["GoT", "LotR", "R+J", "The little book of calm"]
console.log(newBookList); //Output: ["GoT", "LotR", "R+J", "The little book of calm", "A Brief History of Time"]
