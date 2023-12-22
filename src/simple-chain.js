const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value = ' ') {
      this.chain.push(value);
      return this;
  },
  removeLink(position) {
      if (typeof position === 'number') {
          if (position > 0 && position <= this.chain.length) {
              this.chain.splice(position - 1, 1);
              return this;
          }
      }

      throw new Error('You can\'t remove incorrect link!');
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let strChain = '';

      for (const link of this.chain) {
          strChain += `( ${link} )~~`;
      }

      return strChain.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
