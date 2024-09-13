const prompt = require("prompt-sync")({ sigint: true });

class User {
   constructor(drive) {
      this.gameDrive = drive;
   }

   getPass() {
      let input = prompt("Enter your option: ");
      while (!this.gameDrive.isValidInput(input)) {
         console.log("Invalid input. Please, enter valid input!");
         input = prompt("Enter your option: ");
      }
      return input;
   }
}

module.exports = User;
