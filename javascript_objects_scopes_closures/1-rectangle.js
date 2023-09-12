#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}

const rectangle = class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}
  console.log('${this.width} * ${this.height} = ${this.width * this.height}');
  console.log('${this.width} / ${this.height} = ${this.width / this.height}');