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
    } else {
      console.error('The rectangle is empty.');
    }
  }

  rotate() {
    [this.width, this.height] = [this.height, this.width];
    return !!this.width && !!this.height;
  }

  double() {
    this.width *= 2;
    this.height *= 2;
    return !!this.width && !!this.height;
  }
};

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

const mySquare = new Square(5);

mySquare.print();

const rotated = mySquare.rotate();
if (rotated) {
  mySquare.print(); 
}
const doubled = mySquare.double(); 

if (doubled) {
  mySquare.print(); 
}