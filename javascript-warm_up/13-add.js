#!/usr/bin/node
function add(a, b) {
    return a + b;
  }
  
  module.exports = {
    add: add
  };

  const add = require('./13-add').add;
console.log(add(3, 5))