// Sum all the number between the two elements in a given array
function sumAll(arr) {
  let x = 0;
  let y = 0;
  let result = 0;
  if (arr[0] <= arr[1]) {
    x = arr[0];
    y = arr[1];
  } else {
    x = arr[1];
    y = arr[0];
  } //x <= y
  for (let i=x; i<=y; i++) {
    result += i;
  }
  return result;
}
sumAll([1, 4]);

// OR //
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let killerArr = [];
  for (let i=1; i<arguments.length; i++) {
    killerArr.push(arguments[i]);
  }
  return arr.filter(item => !killerArr.includes(item));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Change a given string to spinal case (all-lowercase-with-hyphens)
function spinalCase(str) {
	let myArr = str.match(/[A-Z][a-z]+|[a-z]+/g);
	let myStr = "";
	for (let i = 0; i < myArr.length; i++) {
		myStr += myArr[i];
		if (i != myArr.length-1) {
			myStr += "-";
		}
	}
	return myStr.toLowerCase();
}
spinalCase('AllThe-small Things');

//Pig Latin - modifying stings - my solution:
function translatePigLatin(str) {
  let vowelArr = ['a','e','i','o','u'];
  let constStr = "";	
  let index = 0;
  while ((vowelArr.indexOf(str.charAt(index)) < 0) && (index<str.length)) {
    constStr += str.charAt(index);
    index++;
  }
  return (constStr === "") ? str += "way" : str = str.slice(constStr.length) + constStr + "ay";
}
translatePigLatin("rythym");

//Or - a different solution using regex
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
translatePigLatin("consonant");

// Matching a object (source) with the obects in an array (collection)
function whatIsInAName(collection, source) {
  var arr = [];	
	let coLen = Object.keys(collection).length;
	let searchLen = Object.entries(source).length;
	for (let i=0; i<coLen; i++) {
		let tempObj = collection[i];
		let allMatch = true;
		for (let j=0; j<searchLen; j++) {
			let x = Object.entries(source)[j][0];
			if (source[x] != tempObj[x]) {
				allMatch = false;				
			}		
		}
		if (allMatch) { 
			arr.push(tempObj); 
		}
	}
	return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});

