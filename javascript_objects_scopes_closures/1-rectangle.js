#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
      if (w > 0 && h > 0) {
          this.width = w;
          this.height = h;
      } else {
          this.width = undefined;
          this.height = undefined;
      }
  }
}
const rectangle1 = new Rectangle(3, 3);
console.log(`Instance width: ${rectangle1.width} - height: ${rectangle1.height}`);

const rectangle2 = new Rectangle(3, -3);
console.log(`Instance width: ${rectangle2.width} - height: ${rectangle2.height}`);

const rectangle3 = new Rectangle(3);
console.log(`Instance width: ${rectangle3.width}`);

const rectangle4 = new Rectangle(undefined, 3);
console.log(`Instance width: ${rectangle4.width} - height: ${rectangle4.height}`);

const rectangle5 = new Rectangle();
console.log("Instance no argument");