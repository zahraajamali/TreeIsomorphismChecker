/**
 * This function create list with random item.
 * @param {string} number of tree leaves - lenght of random list = 2 * number of leaves .
 * @returns {list} The object that contain {tree1,tree2}.
 */

function getRandomListForVariableValue(numberOfLeaves) {
  const sizeOfRandomNumberList = 2 * numberOfLeaves;

  const arr = [];
  for (let i = 0; i < sizeOfRandomNumberList; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
}

module.exports = getRandomListForVariableValue;
