// Arrays 
let fruits = ["apple"/**index 0 */, "banana"/**index 1 */, "peach" /**index 2 */] // index start from 0

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// methods for array

// 1. push() // add an element to the end of array
fruits.push("orange")
console.log(fruits)
console.log(fruits.length)
// 2. pop() / remove the last element of the array
fruits.pop()
console.log(fruits)
console.log(fruits.length)
// 3. shift() // remove the first element of the array
fruits.shift()
console.log(fruits)
console.log(fruits.length)
// 4. unshift() // add an element to the beginning of the array
fruits.unshift("orange","watermelon")
console.log(fruits)

// 5. length()
console.log(fruits.length)

// 🏋️‍♂️ Exercise 1: Favorite Movies
// Create an array called favoriteMovies with 3 of your favorite movies.
// Add another movie to the end of the array.
// Print the first and last movie in the array.

const favoriteMovies = ["Boha" ,"1000 Mabrouk", "Oakal"]
favoriteMovies.push("Ellmby");

console.log("First : ", favoriteMovies[0])
console.log("last : ", favoriteMovies[favoriteMovies.length - 1])

// 🏋️‍♂️ Exercise 2: Print Numbers
// Create an array with numbers from 1 to 5. Use a forEach loop to print each number.

const nums = [1, 2, 3, 4, 5]

// for(let i = 0; i < nums.length ; i++){
//     console.log(nums[i])
// }

fruits.forEach((fruit) => console.log(fruit))