const numbers = [12, 34, 56, 78, 90];

// Replace the value 12 with 89 using the array's forEach() method
numbers.forEach((number, index) => {
  if (number === 12) {
    numbers[index] = 89;
  }
});

console.log(numbers);
