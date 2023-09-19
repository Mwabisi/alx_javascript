#!/usr/bin/node

module.exports = class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
  
    print() {
      if (this.height && this.width) {
        const row = 'X'.repeat(this.width);
        for (let i = 0; i < this.height; i++) {
          console.log(row);
        }
      }
    }
  }
  
    rotate() {
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      this.width *= 2;
      this.height *= 2;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

const mySquare = new Square(5);
mySquare.print();
mySquare.rotate();
mySquare.print();
mySquare.double();
mySquare.print();