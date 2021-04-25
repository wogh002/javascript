'use strict';
//상속 & 다형성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of `);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape { }

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() { //오버라이딩
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'blue');
console.log(rectangle.getArea());
console.log(triangle.getArea());
triangle.draw();


