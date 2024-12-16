/**
 * This function return list of tree variables.
 * @param {object} an object that contain nodes variable
 * @returns {list} list of tree variable(remove duplicated variable)
 */
function getUniqueValues(obj) {
  const values = Object.values(obj);
  return [...new Set(values)];
}

module.exports = getUniqueValues;
