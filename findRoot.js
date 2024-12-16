/**
 * This function return the root of tree.
 * @param {list} edges
 * @returns {string} root of tree
 */
function findRoot(edges) {
  const nodeSet = new Set();
  let possibleRoots = new Set();

  // Add all nodes to a set
  for (const edge of edges) {
    nodeSet.add(edge[0]);
    nodeSet.add(edge[1]);
  }

  // Find possible roots by looking for nodes that only appear as a parent
  for (const node of nodeSet) {
    let isParent = true;
    for (const edge of edges) {
      if (edge[1] === node) {
        isParent = false;
        break;
      }
    }
    if (isParent) {
      possibleRoots.add(node);
    }
  }

  // If there is only one possible root, return it
  if (possibleRoots.size === 1) {
    return possibleRoots.values().next().value;
  } else {
    // Find the common parent of all possible roots
    let commonParent = null;
    for (const edge of edges) {
      if (possibleRoots.has(edge[1])) {
        if (commonParent === null) {
          commonParent = edge[0];
        } else if (commonParent !== edge[0]) {
          return null;
        }
      }
    }
    return commonParent;
  }
}

module.exports = findRoot;
