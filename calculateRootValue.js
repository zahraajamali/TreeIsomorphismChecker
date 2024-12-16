/**
 * @param {tree} tree
 * @param {object} nodes value
 * @param {number} divisionFactor(random prime number)
 * @returns {number} root value
 */
function calculateRootValue(node, values, divisionFactor) {
  if (!node.children || node.children.length === 0) {
    return values[node.id];
  }

  let currentNodeValue = values[node.id];
  let childrenValues = node.children.map((child) =>
    calculateRootValue(child, values, divisionFactor)
  );

  if (node.children.length === 1) {
    let childValue = childrenValues[0];
    return currentNodeValue - childValue;
  } else {
    let product = 1;
    for (const childValue of childrenValues) {
      product *= currentNodeValue - childValue;
    }
    // console.log(product);
    if (product > 50) {
      product %= divisionFactor;
    }
    return product;
  }
}

module.exports = calculateRootValue;
