// reduce()

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((total, num) => total * num, 1)

console.log(sum)

// 🏋️‍♂️ Exercise 3: Total Price
// Create an array of prices, e.g., [5, 10, 15].
// Use reduce to find the total price of all items.

const prices = [5, 10, 15]
const total = prices.reduce((sum, price) => sum + price,0)

console.log(total)