class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // If w or h is equal to 0 or a negative number,
        // create an empty object.
        return {};
      }
      
      this.width = w;
      this.height = h;
    }
  
    print() {
      for (let i = 0; i < this.height; i++) {
        let row = '';
        for (let j = 0; j < this.width; j++) {
          row += 'x';
        }
        console.log(row);
      }
    }
  }
  
  // Usage example:
  const rectangle = new Rectangle(5, 3);
  rectangle.print();