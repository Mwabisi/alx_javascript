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
let rectangle1 = new Rectangle(3, 3);
console.log(rectangle1.width); 
console.log(rectangle1.height);  

let rectangle2 = new Rectangle(3, -3);
console.log(rectangle2.width);  
console.log(rectangle2.height);  

let rectangle3 = new Rectangle(3);
console.log(rectangle3.width);  
console.log(rectangle3.height);  

let rectangle4 = new Rectangle(undefined, 3);
console.log(rectangle4.width);  
console.log(rectangle4.height);  

let rectangle5 = new Rectangle();
console.log(rectangle5.width);  
console.log(rectangle5.height);  
