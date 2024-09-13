const crypto = require("crypto");

class Computer {
   constructor(passes) {
      this.passes = passes;
   }

   getPass() {
      const randomIndex = crypto.randomInt(this.passes.length);
      return this.passes[randomIndex];
   }
}

module.exports = Computer;
