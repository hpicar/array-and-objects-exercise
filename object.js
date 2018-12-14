  var myPenguin = {
  name: ['Helen the Penguin'],
  origin: ['The Pebble and the Penguin'],
  notes: ['The main character of the episode "Helen the Penguin".']
};
console.log("Hello, I'm a penguin, not a bear, and my name is " + myPenguin.name + "."); //myPenguin.name
myPenguin.canFly = false
myPenguin.chirp = function() {
  return ("CHIRP CHIRP! Is this what penguins sound like?");
};
myPenguin.sayHello = function() {
  return ("Hello, I'm a penguin, not a bear, and my name is " + this.name + ".");
};
console.log(myPenguin.sayHello());
myPenguin.name = "Penguin McPenguinFace";
console.log(myPenguin.sayHello());
myPenguin.fly = function () {
  if (myPenguin.canFly == true) { 
  return "I can fly!";
} else {
  return "No flying for me!";
}
}
console.log(myPenguin.fly());
myPenguin.canFly = true;
console.log(myPenguin.fly());
var text = " "
for (x in myPenguin) {
  console.log(x);
};
var text = " "
for (x in myPenguin) {
  console.log(myPenguin[x]);
};