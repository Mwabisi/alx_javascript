class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
  }

  const square = new Square(4);

  square.print(); // Prints the square

const doubleSquare = square.double();

doubleSquare.print(); 

const rotatedSquare = square.rotate(); 

rotatedSquare.print(); 
