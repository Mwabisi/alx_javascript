module.exports = class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      console.error("Invalid arguments. Both width and height must be positive numbers.");
    }
  }
};