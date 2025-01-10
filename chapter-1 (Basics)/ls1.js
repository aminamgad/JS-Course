// variables


// let :block scoped

let amin = 10

 function ee(params) {
    let x = 8
    console.log(x)
 }

//const :block scoped  name Name
const name = "amin"
// name = "Ahmed"
console.log(name)


//var function scoped only

function varex(params) {
    var var1 = 8
    console.log(var1)
 }
 for (let i = 0; i < 5; i++) {
    var age = 18;
    
 }

 let x = 8

 var y =10
 var y =9
 var y =10
 var y =9
 var y =10
 var y =9
 var y =10
 var y =9
 var y =10
 var y =9
 var y =10
 var y =9
 console.log(y)

//data types

//string text
 let name1 = "Amin Amgad"
 let name2 = 'Hello '

 console.log(typeof name1 )
 console.log(name2 + name1)
 // number
 let n1 = 2
 let n2 = 5

 console.log(typeof n1 )
 console.log(n1 + n2)

 //Boolean true or false

 let isStudent = false
 console.log(typeof isStudent )

//null

let xd = null
 console.log(typeof xd )
// undefined

let xr ;
console.log(typeof xr)     

// 🏋️‍♂️ Exercise 1: Variable Practice
// Declare a const variable country and assign your country’s name to it.
// Declare a let variable population and assign an estimated population value.
// Declare a var variable isDeveloped and set it to true or false.
// Print each variable to the console

let country = "Egypt"
let population = 100000000
let isDeveloped = true

console.log(country)
console.log(population)
console.log(isDeveloped)