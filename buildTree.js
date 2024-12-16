/**
 * This function create the tree based on list of edges.
 * @param {list} edges - a list of edges with this item [parent,child] .
 * @param {string} root - root of the tree .
 * @returns {object} The object that contain each node with childrens and height and number of leaves.
 * output sample :
 * {
    id: '',
    children: [
      { id: '', children: [], height: '', leaves: '' },
      ...
    ],
    height: '',
    leaves: ''
  }
 */

function buildTree(edges, root) {
  const graph = {};
  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = { id: u, children: [], height: null };
    if (!graph[v]) graph[v] = { id: v, children: [], height: null };
    graph[u].children.push(graph[v]);
  }

  function dfs(node) {
    if (node.children.length === 0) {
      node.height = 0;
      node.leaves = 1;
    } else {
      let maxHeight = -1;
      let numLeaves = 0;
      for (const child of node.children) {
        dfs(child);
        maxHeight = Math.max(maxHeight, child.height);
        numLeaves += child.leaves;
      }
      node.height = maxHeight + 1;
      node.leaves = numLeaves;
    }
  }

  const tree = graph[root];
  dfs(tree);
  return tree;
}

// const edges = [
//   ["3", "6"],
//   ["7", "8"],
//   ["5", "9"],
//   ["2", "4"],
//   ["7", "5"],
//   ["5", "1"],
//   ["3", "2"],
//   ["3", "7"],
// ];
// const edges2 = [
//   ["1", "3"],
//   ["1", "2"],
// ];

// const edges3 = [
//   ["3", "1"],
//   ["1", "2"],
// ];

// const tree = buildTree(edges2, "1");
// console.log("tree is..", tree);

module.exports = buildTree;
