const Table = require("cli-table3");

class Generator {
   constructor(passes) {
      this.passes = passes;
      this.rulesTable = this.generate();
   }

   generate() {
      const passesLength = this.passes.length;
      const table = [];

      for (let i = 0; i < passesLength; i++) {
         table[i] = [];

         for (let k = 0; k < passesLength; k++) {
            if (i === k) {
               table[i][k] = "Draw";
            } else {
               const half = Math.floor(passesLength / 2);
               const diff = (i - k + passesLength) % passesLength;
               table[i][k] = diff <= half && diff !== 0 ? "Win" : "Lose";
            }
         }
      }

      return table;
   }

   print() {
      const table = new Table({
         head: ["↓User/PC→"].concat(this.passes),
         style: { head: ["cyan"] },
      });

      for (let i = 0; i < this.passes.length; i++) {
         table.push([this.passes[i]].concat(this.rulesTable[i]));
      }

      console.log("Help table:");
      console.log(table.toString());
   }

   getResult(playerMove, computerMove) {
      const playerIndex = this.passes.indexOf(playerMove);
      const computerIndex = this.passes.indexOf(computerMove);
      return this.rulesTable[playerIndex][computerIndex];
   }
}

module.exports = Generator;
