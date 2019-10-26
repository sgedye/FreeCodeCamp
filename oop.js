//Object Orientated Programming

function Dog(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
};
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eating: function() {console.log(“Nom nom nom”);}
};
let hound = new Dog(“Boris”, “Black”);
hound instanceof Dog; //Returns true
hound.name; //Return
hound.eating(); //Output: Nom nom nom
Dog.prototype.isPrototypeOf(hound); //Returns true
Object.prototype.isPrototypeOf(Dog); //Returns true
