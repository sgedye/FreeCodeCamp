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

// A third way to perform the same task, in even less code
const realNumberArray = [4, 5.7, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray); // test your code
console.log(squaredIntegers);

/* Deconstructing Objects */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => { 
  return (max + min) / 2.0;
}
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

/* Class - Constructors/Getters/Setters */
class Thermostat {
    constructor(fahrenheitTemp) {
        this._fahrenheitTemp = fahrenheitTemp;
    }
    get temperature() {
        return (5/9 * (this._fahrenheitTemp - 32));
    }
    set temperature(updatedTemperature) {
        this._fahrenheitTemp = updatedTemperature;
    }
}
const thermos = new Thermostat(76); // Fahrenheit
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
