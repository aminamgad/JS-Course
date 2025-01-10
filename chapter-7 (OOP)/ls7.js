// Abstraction

class Employee {
    constructor(name) {
        if(this.constructor === Employee) {
            throw new Error("Cannot make an object from this abstract class")
        }
        this.name = name;
    }

    getSalary() {
        throw new Error("Cannot make get a salary from this abstract class")
    }
}

class FullTimeEmloyee extends Employee {
    constructor(name, salary){
        super(name)
        this.salary = salary
    }

    getSalary() {
        return this.salary;
    }
}

class PartTimeEmloyee extends Employee {
    constructor(name, hourRate, hourWorked){
        super(name)
        this.hourRate = hourRate
        this.hourWorked = hourWorked
    }

    getSalary() {
        return this.hourRate * this.hourWorked;
    }
}

const emp1 = new FullTimeEmloyee("Amin" , 2000)

console.log(emp1.getSalary());
const emp2 = new PartTimeEmloyee("Ahmed", 10, 4)

console.log(emp2.getSalary());
