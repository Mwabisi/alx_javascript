const square = new Square(5);

square.charPrint('D'); // Prints the square using the character 'D'

square.charPrint(); // Prints the square using the character 'X'

square.charPrint('KKK'); // Prints the square using the character 'KKK'

// Create a new square object with size 3
const smallSquare = new Square(3);

// Print the small square using the character 'D'
smallSquare.charPrint('D');

// Double the size of the small square
smallSquare.double();

// Print the doubled small square using the character 'O'
smallSquare.charPrint('O');
