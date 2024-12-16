/**
 * This function return list of node value.
 * @param {list} list of tree variables
 * @param {list} list of random value
 * @returns {object} assign a random value form randomList to each tree variable
 */
function assignRandomValues(nodes, RaList) {
  const values = [...RaList];
  const assigned = {};
  for (const node of nodes) {
    let value;
    if (values.length === 0) {
      value = assigned[nodes[Math.floor(Math.random() * nodes.length)]];
    } else {
      const index = Math.floor(Math.random() * values.length);
      value = values[index];
      values.splice(index, 1);
    }
    assigned[node] = value;
  }
  return assigned;
}

module.exports = assignRandomValues;
