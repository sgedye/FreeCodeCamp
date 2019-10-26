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
  eat: function() { console.log("nom nom nom"); }
};
function Cat() { }
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.talk = function() { console.log("meow"); };
let tabby = new Cat();
tabby.eat(); //Output: nom nom nom
tabby.talk(); //Output: meow
Cat.prototype.eat = function() { console.log("munch munch munch"); };
tabby.eat(); //Output: munch munch munch

//Private variables and public 'getter' methods
function Bird() {
  let weight = 15; //Private variable
  this.getWeight = function() { return weight; }; //Publicly available getter method
}
let fluffy = new Bird();
console.log(fluffy.getWeight());
