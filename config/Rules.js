class Rules {
   constructor(passes) {
      this.passes = passes;
   }

   isActionInput() {
      const passes = this.passes;

      if (
         passes.length < 3 ||
         passes.length % 2 === 0 ||
         new Set(passes).size !== passes.length
      ) {
         console.error(
            "\nGame: You must give an odd number of unique moves (not less than 3)!"
         );
         console.error("Try again! Example: rock paper scissors\n");
         return false;
      }
      return true;
   }
}

module.exports = Rules;
