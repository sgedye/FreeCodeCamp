/*** Object Freeze - ensuring objects are immutable */
let myObj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(myObj);
myObj.review = "bad"; //will be ignored.

/*** Arrow Function -- the below two code snippets are logically identical */
//ES5
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
//ES6
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)

/*** Using MAP and FILTER to perform actions on arrays and objects - square only the positive integers */
// This uses a 'for' loop to complete the task
const realNumberArray = [4, 5.7, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = [];
  let j = 0;
  for (let i = 0; i<arr.length; i++) {
    if ( arr[i] % 1 === 0 && arr[i] > 0 ) {
      squaredIntegers[j] = arr[i] * arr[i];
      j++;
    }
  }
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray); // test your code
console.log(squaredIntegers);

// This uses 'filter' and 'map' to complete the same task
const realNumberArray = [4, 5.7, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const myTempArray = realNumberArray.filter((el) => el % 1 === 0 && el > 0);
  const squaredIntegers = myTempArray.map((el) => el * el);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray); // test your code
console.log(squaredIntegers);

