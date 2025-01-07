//filter , map and reduce

const products = [
    {name:"Labtop",price:1000},
    {name:"Mouse", price:15},
    {name:"Keyboard", price:25},
    {name:"Screen", price:200}
]

const expensiveTotal = products
.filter((product) => product.price > 20)
.map((product) => product.price)
.reduce((sum, price) => sum + price,0)

console.log(expensiveTotal)

// 🏋️‍♂️ Exercise 4: Filter, Map, and Reduce
// Create an array of student objects with name and score properties.
// Filter for students with scores above 70.
// Map to an array of scores only.
// Reduce to calculate the average score of the filtered students.

const students = [
    {name:"Amin", score:85},
    {name:"Karim", score:60},
    {name:"Islam", score:75},
    {name:"Loai", score:95}
]

const averageScore = students
.filter((student) => student.score > 70) // [ {name:"Amin", score:85},     {name:"Islam", score:75}     {name:"Loai", score:95},]
.map((student) => student.score) // [85, 75, 95]
.reduce((sum, score, _,array) => sum + score / array.length, 0)

console.log(averageScore)