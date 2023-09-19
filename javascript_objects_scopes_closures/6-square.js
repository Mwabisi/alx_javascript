class Square {
    constructor(size) {
        this.size = size;
    }

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        for (let i = 0; i < this.size; i++) {
            console.log(c.repeat(this.size));
        }
    }
}

// Example usage:
const mySquare = new Square(5);

// Call charPrint with 'O' as the character
mySquare.charPrint('O');

// Call charPrint with the default character 'X'
mySquare.charPrint();
