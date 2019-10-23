// Splice the array, so that sumOfTen([2,5,1,5,2,1]) = 10
function sumOfTen(arr) {
	console.log(`Arr: ${arr}`); //Output: [2,5,1,5,2,1]
  arr.splice(4,2);
	console.log(`Arr: ${arr}`); //Output: [2,5,1,5]
  arr.splice(2,1);
	console.log(`Arr: ${arr}`); //Output: [2,5,5]
  arr.splice(0,1);
	console.log(`Arr: ${arr}`); //Output: [5,5]
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1])); //Output: 10

// Copy the given array 'num' numbers of time into 'newArray'
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Check if the given element exists in the array (using a ternary operator):
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// Use a for..in loop to find out how many users are online.
function countOnline(usersObj) {
  let usersOL = 0;
  for (let user in usersObj) {
    if(usersObj[user]['online'] === true) {
      usersOL++;
    }
  }
  return usersOL; //Returns 2
}
let uObj = { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } };
countOnline(uObj);


