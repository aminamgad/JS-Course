// Arrays of Objects

const people = [
    {name:"Amin", age:20},
    {name:"Karim", age:40},
    {name:"Osama", age:22}
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name)
// }

// for each
people.forEach((person) => console.log(person.name) )

/**
 * forEach((element) => console.log()) method
 */

// 🏋️‍♂️ Exercise 5: Array of Products
// Create an array called products with three objects, each having properties name, price, and inStock.
// Use forEach to print each product's name and price.

const products = [
    {name: "Labtop", price:1000 , inStock:true},
    {name: "Phone", price: 700, inStock :false},
    {name :" Tablet", price: 400, inStock:true}
]

products.forEach((product) => console.log(`${product.name} : ${product.price}`) )