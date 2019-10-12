/* Testing Objects for Properties */
var myObj = { gift: "pony", pet: "kitten", bed: "sleigh" };
function checkObj(checkProp) {
  var x;
  if (myObj.hasOwnProperty(checkProp)) { x = myObj[checkProp]; }
  else { x = "Not Found"; }
  return x;
}
checkObj("gift");


/* Accessing Nested Arrays */
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];
var secondTree = myPlants[1].list[1];
console.log(secondTree); //Pine

/* Record Collection */
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));  // Keep this line for tests
function updateRecords(id, prop, value) {
  if (value != "") {
    if (prop == "tracks") {
      if (collection[id].hasOwnProperty(prop) == false) {
        collection[id][prop] = [];
      }
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = value;
    }
  }
  else {
    delete collection[id][prop];
  }
  return collection;
}
updateRecords(2548, "artist", "");  // Alter these values to test the code


