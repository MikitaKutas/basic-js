const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let solution = names;
  let current = solution[0];

  for (let i = 1; i < solution.length; i += 1) {
    if (solution[i] === current) {
      if (current.indexOf('(') === -1) {
        solution[i] += '(1)';
        current = solution[i];
      }
       else if (current.indexOf('(') === current.lastIndexOf('(')) {
        solution[i] += '(1)';
        current = solution[i];
      }
    }

    if (current.indexOf('(') !== current.lastIndexOf('(') && solution[i] !== current) {
      solution[i] += '(2)';
      current = solution[i];
    }
  }

  return solution;
}

module.exports = {
  renameFiles
};
