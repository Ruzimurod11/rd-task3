const User = require("./User");
const Computer = require("./Computer");
const HmacGenerator = require("./HmacGenerator");
const Generator = require("./Generator");

class Game {
   constructor(passes) {
      this.passes = passes;
      this.passesGenerator = new Generator(passes);
      this.hmacGenerator = new HmacGenerator();
      this.movesMachine = new Computer(passes);
      this.userMachine = new User(this);
   }

   start() {
      const computerMove = this.movesMachine.getPass();

      const hmac = this.hmacGenerator.generateHmac(computerMove);

      console.log(`\nHMAC: ${hmac}`);

      this.printMenu();

      let userMove = this.userMachine.getPass();

      while (userMove === "help") {
         this.passesGenerator.print();
         this.printMenu();
         userMove = this.userMachine.getPass();
      }

      if (parseInt(userMove) === 0) {
         console.log("Game: Exit. Bye!");
         return;
      }

      const playerMove = this.passes[parseInt(userMove) - 1];
      const result = this.passesGenerator.getResult(playerMove, computerMove);

      console.log(`\nYour move: ${playerMove}`);
      console.log(`Computer move: ${computerMove}`);
      console.log(`You ${result.toString().toLowerCase()}!\n`);
      console.log(`HMAC key: ${this.hmacGenerator.getKey()}`);
      console.log(
         `To check the authenticity of the HMAC, follow this link: https://wtools.io/ru/generate-hmac-hash\n`
      );
   }

   printMenu() {
      console.log("\nMenu:");
      for (let l = 0; l < this.passes.length; l++) {
         console.log(`${l + 1} - ${this.passes[l]}`);
      }
      console.log("0 - Exit");
      console.log('Type "help" to see the help table');
   }

   isValidInput(input) {
      const validChoices = [...Array(this.passes.length).keys()]
         .map((i) => (i + 1).toString())
         .concat(["0", "help"]);
      return validChoices.includes(input);
   }
}

module.exports = Game;
