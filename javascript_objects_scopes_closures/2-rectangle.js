#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (!isPositiveInteger(w) || !isPositiveInteger(h)) {
        this = null;
      } else {
        this.width = w;
        this.height = h;
      }
    }
  
    static isPositiveInteger(n) {
      return n >= 1 && Number.isInteger(n);
    }
  }