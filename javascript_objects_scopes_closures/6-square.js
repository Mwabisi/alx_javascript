class Square extends Square {
    constructor(size) {
      super(size);
    }
  
    charPrint(c = 'X') {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          console.log(c);
        }
  
        console.log('\n');
      }
    }
  }
  
