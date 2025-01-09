// Encapsulation

class Person {
    #age;
    #salary;

    constructor(name, age, salary){
        this.name = name;
        this.#age = age >= 0 ? age : 0;
        this.#salary = salary >=  0 ? salary : 0
    }
// get age
    get age() {
        return this.#age
    }
// edit for age
    set age(newAge) {
        if(newAge >= 0){
            this.#age = newAge
        } else {
            console.log(`The age must be Postive`);
        }
    }
// get salary
    get salary() {
        return this.#salary
    }
// edit for salary
    set salary(newSalary) {
        if(newSalary >= 0){
            this.#salary = newSalary
        } else {
            console.log(`The salary must be Postive`);
        }
    }
}

const person = new Person("Ahmed", 25, 10000)

console.log(person.age);
console.log(person.salary);

person.age = -9
console.log(person.age);
