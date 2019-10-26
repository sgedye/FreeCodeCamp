//Object Orientated Programming

function Dog (name, color) {
  this.name = name,
  this.color = color
};
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eating: function() { console.log("Nom nom nom"); },
  describe: function() { console.log("My name is " + this.name); }
};
let terrier = new Dog("Toby", "red");
console.log(`Name: ${terrier.name} | Color: ${terrier.color} | Legs: ${terrier.numLegs}`);
terrier.describe();
terrier.eating();
console.log(Dog.prototype.isPrototypeOf(terrier)); //Returns true
console.log(terrier instanceof Dog); //Returns true
console.log(Object.prototype.isPrototypeOf(Dog)); //Returns true

//Using inheritance
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let beagle = Object.create(Animal.prototype);
beagle.eat(); //Output: nom nom nom
