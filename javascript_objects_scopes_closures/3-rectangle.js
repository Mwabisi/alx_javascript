class Rectangle {
    constructor(width, height) {
      if (width <= 0 || height <= 0) {
        this.width = null;
        this.height = null;
      } else {
        this.width = width;
        this.height = height;
      }
    }
  
    print() {
      if (this.width === null || this.height === null) {
        return;
      }
  
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          console.log('X', end='');
        }
        console.log();
      }
    }
  }
  