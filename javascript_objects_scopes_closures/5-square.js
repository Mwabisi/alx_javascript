class Square {
    constructor(size) {
      if (size < 0) {
        throw new Error('Invalid square size.');
      }
  
      this.size = size;
    }
  
    print() {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          console.log('*');
        }
  
        console.log('\n');
      }
    }
  
    double() {
      return new Square(this.size * 2);
    }
  
    rotate() {
      return new Square(this.size).map((row, i) => {
        return row.map((cell, j) => {
          return this.get(j, i);
        });
      });
    }
  
    get(row, column) {
      if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
        return undefined;
      }
  
      return this.cells[row][column];
    }
  
    set(row, column, value) {
      if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
        return;
      }
  
      this.cells[row][column] = value;
    }
  }

  const square = new Square(-4);

// Error: Invalid square size.
