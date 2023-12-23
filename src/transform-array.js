const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
      throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let ans = [...arr];

  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case "--discard-next":
              if (i + 1 < arr.length) {
                  ans[i + 1] = '';
              }
              ans[i] = '';
              break;
          case "--discard-prev":
              if (i - 1 >= 0) {
                if (ans[i - 1] instanceof Array) {
                  ans[i - 1].pop();
              } else {
                ans[i - 1] = '';
              }
              }
              ans[i] = '';
              break;
          case "--double-next":
              if (i + 1 < arr.length && ans[i + 1] !== '') {
                  ans[i + 1] = [arr[i + 1], arr[i + 1]];
              }
              ans[i] = '';
              break;
          case "--double-prev":
              if (i - 1 >= 0 && ans[i - 1] !== '') {
                  if (ans[i - 1] instanceof Array) {
                      ans[i - 1].push(ans[i - 1][0]);
                  } else {
                    ans[i - 1] = [ans[i - 1]];
                  }
              }
              ans[i] = '';
              break;
      }
  }

  let ans1 = [];

  for (let element of ans) {
      if (element instanceof Array) {
          element.forEach(value => {
              ans1.push(value);
          })
          continue;
      }
      if (element === '') {
          continue;
      }

      ans1.push(element);
  }

  return ans1;
}

module.exports = {
  transform
};
