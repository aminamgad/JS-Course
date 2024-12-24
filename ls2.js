// Operators and Expressions

// 1.Arithmatic Operators + - * / % **

let num1 = 3;
let num2 = 3;

let sum = num1 + num2;
console.log(sum)
console.log(num2 - num1)
console.log(num1 * num2)
console.log(num2 / num1)
console.log(num2 % num1) // 11 / 5 = 5.5 .... (5) وباقي القسمة = 1
console.log(num2 ** num1)
console.log(num1 ** num2)

// 2.Comparison Operators == === != !== >  < >= <=

// if(num1 == num2){
//     console.log("== compare value by value")
// }else(
//     console.log("The condition is not met")
// )

// if(num1 === num2){
//     console.log("=== compare value by value and data types")
// }else(
//     console.log("The condition is not met")
// )

// if(num1 != num2){
//     console.log("!= not equal value by value")
// }else(
//     console.log("The condition is not met")
// )


// if(num1 !== num2){
//     console.log("!== not equal value by value and data type")
// }else(
//     console.log("The condition is not met")
// )

// if(num1 <= num2){
//     console.log("The condition is met")
// }else(
//     console.log("The condition is not met")
// )

// 3.Logical Operators && = and || = or ! = not
let age = 18;
// if(num1 == num2 && age >=18){
//     console.log("The condition is met")
// }else(
//     console.log("The condition is not met")
// )
if(num1 > num2 || age >18){
    console.log("The condition is met")
}else(
    console.log("The condition is not met")
)



// 🏋️‍♂️ Exercise 2: Simple Math
// Write code that does the following:

// Create two variables: num1 and num2 and assign them any numbers.
// Perform the following operations and print the result:
// Sum of num1 and num2
// Difference between num1 and num2
// Product of num1 and num2
// Quotient when num1 is divided by num2
// Check if num1 is greater than num2

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 > num2)
