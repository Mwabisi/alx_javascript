class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    
    getArea() {
      return this.width * this.height;
    }
    
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // square.js
  
  // Import the Rectangle class from 4-rectangle.js
  const Rectangle = require('./4-rectangle');
  
  class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of Rectangle with size as width and height
      super(size, size);
    }
  }
  
  // Export the Square class
  module.exports = Square;

  const Square = require('./square');

// Create a Square object
const mySquare = new Square(5);

console.log(mySquare.getArea()); 
console.log(mySquare.getPerimeter());