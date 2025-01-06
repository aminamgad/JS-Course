// Objects

const person = {
    // key :value:
    name :"Amin",
    age:30,
    isStudent:true,
    // city:"New York"
}

console.log(person)

console.log(person.name)
console.log(person["age"])

person.name = "Ahmed" //modify
person.age =31 //modify

person.city = "Mansoura"; //add a new key

console.log(person)

// 🏋️‍♂️ Exercise 3: Create an Object
// Create an object called car with properties for make, model, and year.
// Add a new property for color.
// Print the entire object.

const car = {
    make:"Toyota",
    model:"Camry",
    year:2020
}

car.color = "Black"

console.log(car)