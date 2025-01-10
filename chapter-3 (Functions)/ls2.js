//Scope  block {}

//global scope

var name = "Karim";

//function scope

function greet() {
  var name = "Amin";
}
if (true) {
  // var age = 18
  let age = 18;
}

let age = 20; //global

console.log(name);

//block scope let , const {}

console.log(age);

// 🏋️‍♂️ Exercise 2: Understanding Scope
// Write a function called scopeTest that declares a variable message within the function. Inside the function, write an if statement that declares another variable innerMessage and prints both message and innerMessage inside and outside of the if block.

function scopeTest() {
  let message = "Outer message";

  if (true) {
    let innerMessage = "Inner Message";
    console.log(message);
    console.log(innerMessage);
  }
  console.log(message);
//   console.log(innerMessage); //error 
}

scopeTest()