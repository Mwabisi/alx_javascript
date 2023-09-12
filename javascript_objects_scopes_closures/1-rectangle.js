#!/usr/bin/node
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  const rect = new Rectangle(3, 3);

  console.log(rect.width);
  
  console.log(rect.height);