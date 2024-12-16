/**
 * This function calculates the sum of two numbers.
 * @param {string} filename - The filename that contains data of two trees .
 * @returns {object} The object that contain {tree1,tree2}.
 * output sample :
 * Tree 1: [ [ '1', '2' ], [ '1', '3' ] ]
   Tree 2: [ [ '3', '1' ], [ '1', '2' ] ]
 */

const readDataAndGetEdges = (filename) => {
  const fs = require("fs");

  const input = fs.readFileSync(filename, "utf-8");
  const lines = input.trim().split("\n");

  const n = parseInt(lines[0]);
  const tree1 = [];
  const tree2 = [];
  //map the array elements to their index values plus 1
  const nodes = Array.from({ length: n }, (_, i) => `${i + 1}`);

  for (let i = 1; i <= n - 1; i++) {
    const [parent, child] = lines[i];
    tree1.push([parent, child]);
  }

  for (let i = n; i <= 2 * (n - 1); i++) {
    const [parent, child] = lines[i];
    tree2.push([parent, child]);
  }

  return { tree1, tree2, nodes };
};

module.exports = readDataAndGetEdges;
