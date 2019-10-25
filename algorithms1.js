// Reverse a given string and output it as a string.
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
// Reverse a given string and output it as a string. (Alternate Solution)
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Create a function that takes a string and capitalises only the first letter of each word.
function titleCase(str) {
  let outStr = "";
  let lowerArr = str.toLowerCase().split(" ");
  for (let i=0; i<lowerArr.length; i++) {
    let tempChar = "";
    let tempStr = "";
    tempChar = lowerArr[i].charAt(0).toUpperCase();
    tempStr = lowerArr[i].slice(1,);
    outStr += tempChar.concat(tempStr);
    if (i < lowerArr.length-1) {
      outStr += " ";
    }
  }
  console.log(outStr);
  return outStr;
}
titleCase("I'm a liTTle tea pot");
// Create a function that takes a string and capitalises only the first letter of each word.

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

// Return the lowest index at which a value (num) should be inserted into an array (arr) once it has been sorted.
function getIndexToIns(arr, num) {
  // 1. sort array
  let sortedArr = arr.sort(function(a,b){return a-b});
  // 2. where does it go
  let index = 0;
  for (let i=0; i<sortedArr.length; i++) {
    if (num > sortedArr[i]) {
      index++;
    }
  }
  console.log(sortedArr);
  return index;
}
getIndexToIns([100, 5, 40, 60], 50);
