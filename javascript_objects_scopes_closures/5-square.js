class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    if (this.height && this.width) {
      for (let i = 0; i < this.height; i++) {
        const row = 'X'.repeat(this.width);
        console.log(row);
      }
    } else {
      console.error('The rectangle is empty.');
    }
  }

  rotate() {
    if (this.width && this.height) {
      [this.width, this.height] = [this.height, this.width];
      return true;
    } else {
      return false;
    }
  }

  double() {
    if (this.width && this.height) {
      this.width *= 2;
      this.height *= 2;
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

function testOutput(size) {
  console.log(`Correct output - size = ${size}`);
  const square = new Square(size);

  square.print();
  console.log(`Correct output - size = ${size} - print`);

  if (square.double()) {
    console.log(`Correct output - size = ${size} - print - double - print`);
  } else {
    console.error(`Invalid arguments - size = ${size}`);
    return;
  }

  if (square.rotate()) {
    console.log(`Correct output - size = ${size} - print - double - print - rotate - print`);
  } else {
    console.error(`Invalid arguments - size = ${size}`);
    return;
  }
}

testOutput(4);
testOutput(5);
testOutput(-1);
