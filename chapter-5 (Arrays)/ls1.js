// map() // new array

const numbers = [1,2,3,4,5]

const squared = numbers.map((num) => num * num)

console.log(squared)

//  🏋️‍♂️ Exercise 1: Uppercase Names
// Create an array of names, e.g., ["amin", "karim", "dalia"].
// Use map to create a new array where each name is capitalized.

const names = ["amin" , "karim", "dalia"]

const uppercaseNames = names.map((name) => name.toUpperCase())

console.log(uppercaseNames)