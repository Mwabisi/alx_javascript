#!/usr/bin/node
class Rectangle {
    constructor(width, height) {
      if (width <= 0 || height <= 0) {
        this = null;
      } else {
        this.width = width;
        this.height = height;
      }
    }
  }
  