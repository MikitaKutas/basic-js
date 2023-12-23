const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(str, key) {
      if (str === undefined || key === undefined) {
          throw new Error("Incorrect arguments!");
      }

      let ans = '';
      str = str.toUpperCase();
      key = key.toUpperCase();

      while (str.length > key.length) {
          key = key.repeat(2);
      }

      let index = 0;

      for (let i = 0; i < str.length; i++) {
          if (this.alphabet.includes(str[i])) {
              const strChar = this.alphabet.indexOf(str[i]);
              const keyChar = this.alphabet.indexOf(key[index]);
              ans += this.alphabet.charAt((strChar + keyChar) % 26);
              index++;
          } else {
              ans += str[i];
          }
      }
      if (!this.isDirect) {
          return ans.split('').reverse().join('');
      }
      return ans;
  }
  decrypt(str, key) {
      if (str === undefined || key === undefined) {
          throw new Error("Incorrect arguments!");
      }

      let ans = '';
      str = str.toUpperCase();
      key = key.toUpperCase();

      while (str.length > key.length) {
          key = key.repeat(2);
      }

      let index = 0;

      for (let i = 0; i < str.length; i++) {
          if (this.alphabet.includes(str[i])) {
              const strChar = this.alphabet.indexOf(str[i]);
              const keyChar = this.alphabet.indexOf(key[index]);
              const decryptChar = (strChar - keyChar) % 26 >= 0 ? (strChar - keyChar) % 26 : 26 + ((strChar - keyChar) % 26);
              ans += this.alphabet.charAt(decryptChar);
              index++;
          } else {
              ans += str[i];
          }
      }
      if (!this.isDirect) {
          return ans.split('').reverse().join('');
      }
      return ans;
  }

  constructor(isDirect = true) {
      this.isDirect = isDirect;
      this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
}

module.exports = {
  VigenereCipheringMachine
};
