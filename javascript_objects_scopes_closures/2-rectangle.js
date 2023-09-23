#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      this.width = undefined;
      this.height = undefined;
    } else {
      this.width = w;
      this.height = h;
    }
  }
}

// Creating instances of the Rectangle class
let rectangle1 = new Rectangle(2, 3);
console.log(rectangle1.width);  
console.log(rectangle1.height);  

let rectangle2 = new Rectangle(0, 4);
console.log(rectangle2.width);  
console.log(rectangle2.height); 

let rectangle3 = new Rectangle(-1, -1);
console.log(rectangle3.width);  
console.log(rectangle3.height);