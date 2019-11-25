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

// OR THIS //
const bookList = ["GoT", "LotR", "R+J", "The little book of calm"];
function add(list, bookName) {
  return [...list, bookName];
}
var newBookList = add(bookList, 'A Brief History of Time');
console.log(bookList); //Output: ["GoT", "LotR", "R+J", "The little book of calm"]
console.log(newBookList); //Output: ["GoT", "LotR", "R+J", "The little book of calm", "A Brief History of Time"]


/** Using MAP() **/
// the global variable
var watchList = [
  { "Title": "The Dark Knight", "Year": "2008", "Rated": "PG-13", "imdbRating": "9.0" },
  { "Title": "Batman Begins", "Year": "2005", "Rated": "PG-13", "imdbRating": "8.3" },
  { "Title": "Avatar", "Year": "2009", "Rated": "PG-13", "imdbRating": "7.9" }
];
// This block of code does the same thing as the for loop below, but uses map()
var rating = watchList.map(obj => {
   let rObj = {};
   rObj["title"] = obj.Title;
   rObj["rating"] = obj.imdbRating;
   return rObj;
});
// For loop, which does the same things and the map function above
/*var rating = [];
for(var i=0; i < watchList.length; i++){
  rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}*/
console.log(rating);


/** .push() v.s. .concat() for arrays **/
var arrA = [1,2,3];
var arrB = [4,5,6];
var x = arrA.concat(arrB); // arrA (and arrB) remain the same, but x = [1,2,3,4,5,6]
arrA.push(arrB); // arrA is mutated (changed) to [1,2,3,[4,5,6]]


// Using .map(), .filter() and .reduce() to find the average rating of movies by C. Nolan
var watchList = [
  { "Title": "The Dark Knight", "Director": "Christopher Nolan", "Rated": "PG-13", "imdbRating": "9.0" },
  { "Title": "Batman Begins", "Director": "Christopher Nolan", "Rated": "PG-13", "imdbRating": "8.3" },
  { "Title": "Avatar", "Director": "Christopher Nolan", "Rated": "PG-13", "imdbRating": "7.9" },
  { "Title": "Avatar", "Director": "James Cameron", "Rated": "PG-13", "imdbRating": "7.4" }
];
function getRating(watchList) {
  // Creating an array (myList) of ratings (converted to numbers) of movies directed by C.N.
  var myList = watchList
    .filter(movie => movie.Director === "Christopher Nolan")
    .map(movie => { return Number(movie.imdbRating) });  
  // Getting the sum of the array using reduce(), then dividing by the number of elements to get the average rating of a movie directed by C.Nolan
  return myList.reduce((acc, val) => acc + val, 0) / myList.length;
}
console.log(getRating(watchList)); //Output: 8.4

//Using split (str->arr) and join (arr->str):
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you"); //Returns "May the force be with you"

//Turning a page title into a URL-friendly string
var globalTitle = "  Winter Is   Coming ";
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\W+/).join("-");
}
var winterComing = urlSlug(globalTitle); // Returns "winter-is-coming"
