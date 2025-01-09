// Inheritance

class Vehicle{
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }

    getDeatils() {
        console.log(`${this.brand} ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(brand, year, model){
        super(brand, year)
        this.model = model
    }

    getCarDetails() {
        console.log(`${this.brand} ${this.year} ${this.model}`);
    }
}

const car = new Car("Toyota", 2020, "Corolla")

car.getCarDetails()
car.getDeatils()

// Create a parent class called Animal with:

// Properties: name (string) and species (string).
// A method describe() that logs:
// [name] is a [species].
// Create a child class called Bird that:

// Inherits from Animal.
// Adds a new property: canFly (boolean).
// Overrides the describe() method to include whether the bird can fly.
// Create two instances:

// One for Animal.
// One for Bird.
// Call the describe() method on both instances to see the difference.

class Animal{
    constructor(name , species){
        this.name = name;
        this.species = species;
    }

    describe() {
        console.log(`${this.name} ${this.species}`);
    }
}

class Bird extends Animal{
    constructor(name, species, canFly){
        super(name, species)
        this.canFly = canFly
    }

    describe() {
        const flightStaus = this.canFly ? "Can fly" : "Cannot fly";
        console.log(`The Bird is ${flightStaus}`);
    }
}

const animal = new Animal("Leo", "Lion")
const bird = new Bird("Pigeon", "Bird", true)

animal.describe()
bird.describe()