const Rules = require("./config/Rules");
const Game = require("./config/Game");

const args = process.argv.slice(2);

let rule = new Rules(args);

if (rule.isActionInput()) {
   const game = new Game(args);

   game.start();
}
