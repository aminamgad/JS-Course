// Classes
class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species
    }

    describe() {
        console.log(`${this.name} ${this.species}`);
    }
}

const animal1 = new Animal("Leo", "Lion")
const animal2 = new Animal("Fox", "Dog")

animal1.describe()
animal2.describe()

console.log(animal1.describe === animal2.describe);

// Create a class called Book with:
// Properties: title (string), author (string), and year (number).
// A method getSummary() that logs:
// [title] was written by [author] in [year].
// Create two instances of the Book class with different details.
// Call the getSummary() method on both instances.
// Verify that both objects share the same getSummary method.

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.title} ${this.author} ${this.year}`);
    }
}

const book1 = new Book("The Great Leaders", "Kevien", 1990)
const book2 = new Book("Marketing", "Amin", 2005)

book1.getSummary()
book2.getSummary()

console.log(book1.getSummary === book2.getSummary);
