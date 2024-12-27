// Default parameters

function greet(name = "Guest"){
    return `Hello , ${name}`
}

console.log(greet("Amin"))
console.log(greet("Karim"))
console.log(greet())


// Exercise 3: Calculate Area
// Write a function called calculateArea that takes width and height as parameters. Give height a default value of 10. The function should return the area (width * height).

function calcArea(width , height = 10) {
    return width * height
}

console.log(calcArea(5))
console.log(calcArea(5, 6))