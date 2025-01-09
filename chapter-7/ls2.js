// Constructor Functions and Prototypes

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getDetails = function () {
  console.log(
    `Brand is ${this.brand} Model: ${this.model} Year : ${this.year}`
  );
};

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1);

const car2 = new Car("Mercedes", "Corolla", 2024);
console.log(car2);

car1.getDetails();
car2.getDetails();

// Create a constructor function called Person with these properties:
// name (string)
// age (number)
// city (string)
// Add a method introduce to the Person prototype that logs:
// Hi, I'm [name], [age] years old from [city].
// Create two Person objects with different details.
// Call the introduce method on both objects.
// Confirm that both objects share the same introduce method using a comparison (===).

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

Person.prototype.introduce = function () {
  console.log(` Hi, I'm [${this.name}], [${this.age}] years old from [${this.city}].
`);
};


const person1 = new Person("Ali", 30, "Cairo")
const person2 = new Person("Mona", 25, "Alex")

person1.introduce()
person2.introduce()

console.log(person1.introduce === person2.introduce);
