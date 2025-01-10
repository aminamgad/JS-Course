// Functions

// function functionName(parm){

//     return value;
// }

// function greet(name , age){ //paramter
//     console.log(`Hello ${name} age : ${age}`)
//     return 0;
// }

// greet("Amin",18) //argument
// console.log(greet("Amin"))

const add = function(a,b){
    return a + b
}

console.log(add(12 , 4))

// arrow functions

const functionName = () => {
    //code
}

const mutltiply = (a , b) =>  a * b

console.log(mutltiply(4 , 5))

// 🏋️‍♂️ Exercise 1: Create a Greeting Function
// Write a function called sayHello that takes a name as a parameter and returns "Hello, [name]!". Then call this function with different names.

function sayHello(name) {
    return `Hello , ${name}`
}

console.log(sayHello("Amin"))
console.log(sayHello("Fathy"))
console.log(sayHello("Sayed"))