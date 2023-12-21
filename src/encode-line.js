const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }

  let encodedStr = '';
  const array = str.split('');
  let count = 1;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === array[i - 1]) {
      count += 1;
      continue;
    } else {
      if (count > 1) {
        encodedStr += count;
        count = 1;
      }

      encodedStr += array[i - 1];
    }
  }

  if (count > 1) {
    encodedStr += count;
  }

  encodedStr += array[array.length - 1];

  return encodedStr;
}

module.exports = {
  encodeLine
};
