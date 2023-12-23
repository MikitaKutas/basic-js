const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
          index = j + 1;

          if (arr[j] === -1) {
              continue;
          }
          while (arr[index] === -1) {
              index++;
          }
          if (arr[j] > arr[index]) {
              [arr[j], arr[index]] = [arr[index], arr[j]];
          }
      }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
