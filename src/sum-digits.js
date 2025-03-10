const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let ans = n;
  let temp = 0;

  while (Math.floor(ans / 10) !== 0) {
    n = ans;

    while (n !== 0) {
      temp += n % 10;
      n = Math.floor(n / 10);
    }

    ans = temp;
    temp = 0;
  }

  return ans;
}

module.exports = {
  getSumOfDigits
};
