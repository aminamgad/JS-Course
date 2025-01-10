// Intro in OOP
const person = {
    name:"Amin",
    age: 25,
    greet : function()  {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
person.greet()

person.age = 22;

console.log(person);

person.isStudent = true;
console.log(person);

person.city = "Mansoura"
console.log(person);

delete person.city;
console.log(person);

// Create an object called car with the following properties:
// brand (string)
// model (string)
// year (number)
// A method called getDetails that prints "Brand: [brand], Model: [model], Year: [year]".
// Add a new property color to the car object.
// Update the year of the car object.
// Delete the color property from the car object.

const car = {
    brand:"Toyta",
    model:"Num1",
    year:2003,
    getDetails:function() {
        console.log(`Brand ${this.brand} Model : ${this.model} Year:${this.year}`);
    }
}

console.log(car);
car.getDetails()

car.color= "red";
car.year = 2019;

console.log(car);

delete car.color;
console.log(car);

