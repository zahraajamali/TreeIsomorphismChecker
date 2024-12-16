/**
 * This function assign a variable to each node.
 * @param {tree} tree
 * @returns {object} contain each node as key and each variable as value
 * sample:
 * {
  '1': 'X1',
  '2': 'X0',
  '3': 'X0',
  '4': 'X2',
  '5': 'X0',
  '6': 'X1',
  '7': 'X0',
  '8': 'X3',
  '9': 'X0'
}
 */
function generateVariables(tree, height) {
  const variables = {};

  function dfs(node, depth) {
    if (node.children.length === 0) {
      variables[node.id] = `X0`;
    } else {
      for (const child of node.children) {
        dfs(child, depth + 1);
      }

      if (depth === height) {
        variables[node.id] = `X${height}`;
      } else {
        const childIds = node.children.map((child) => child.id);
        const childVariables = childIds.map((id) => variables[id]);
        const maxChildVar = Math.max(
          ...childVariables.map((v) => parseInt(v.substr(1)))
        );
        variables[node.id] = `X${maxChildVar + 1}`;
      }
    }
  }

  dfs(tree, 0);
  return variables;
}

module.exports = generateVariables;
