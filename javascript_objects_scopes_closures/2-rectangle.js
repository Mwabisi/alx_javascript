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

const myRectangle = new Rectangle(5, 3);

console.log(myRectangle.width); 
console.log(myRectangle.height); 