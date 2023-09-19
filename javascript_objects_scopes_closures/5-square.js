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
  