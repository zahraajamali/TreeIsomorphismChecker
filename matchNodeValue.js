/**
 * @param {object} an object that contain nodes variable
 * @param {object} an object that contain variable value
 * @returns {object} match node with value
 */

function getMatchingValues(obj1, obj2) {
  const result = {};
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      const value = obj2[obj1[key]];
      result[key] = value;
    }
  }
  return result;
}

module.exports = getMatchingValues;
