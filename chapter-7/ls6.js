//Polymoriphism

class Shape {
    calcArea() {
        console.log("The Area is not found");
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r
    }

    calcArea() {
        const area = Math.PI * this.r ** 2;
        console.log(`The area of circle is ${area.toFixed(2)}`);
    }
}

class Rectangle extends Shape{
    constructor(w, h) {
        super()
        this.w = w;
        this.h = h;
    }

    calcArea() {
        const area = this.w * this.h;
        console.log(`The area of rectangle is ${area}`);
    }
}

const circle = new Circle(5)
circle.calcArea()

const rectangle = new Rectangle(5, 5)
rectangle.calcArea()