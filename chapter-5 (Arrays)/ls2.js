// filter() 

const ages = [12, 18, 22, 15, 30]
const adults = ages.filter((age) => age >= 18)

console.log(adults)

// 🏋️‍♂️ Exercise 2: Filter Prices
// Create an array of prices, e.g., [5, 10, 15, 20, 25].
// Use filter to create a new array with only prices greater than 15.

const prices = [5, 10, 15, 20, 25]
const highPrices = prices.filter((price) => price > 15 )

console.log(highPrices)