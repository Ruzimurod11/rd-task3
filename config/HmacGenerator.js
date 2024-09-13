const crypto = require("crypto");

class HmacGenerator {
   constructor() {
      this.key = this.generateKey();
   }

   generateKey() {
      this.key = crypto.randomBytes(32).toString("hex");
      return this.key;
   }

   generateHmac(message) {
      if (!this.key) {
         console.error("Game: HMAC key has not been generated!");
      }

      return crypto
         .createHmac("sha3-256", this.key)
         .update(message)
         .digest("hex");
   }

   getKey() {
      return this.key.toString();
   }
}

module.exports = HmacGenerator;
