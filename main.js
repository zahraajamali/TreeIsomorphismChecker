const readDataAndGetEdges = require("./readFile");
const findRoot = require("./findRoot");
const buildTree = require("./buildTree");
const generateVariables = require("./getNodeVariable");
const getRandomListForVariableValue = require("./getRandomListForNode");
const assignRandomValues = require("./assignValueToNode");
const calculateRootValue = require("./calculateRootValue");
const getUniqueValues = require("./getTreeVariable");
const getMatchingValues = require("./matchNodeValue");
const getRandomPrime = require("./chooseRandomPrime");

//step1_read file
const {
  tree1: tree1Edges,
  tree2: tree2Edges,
  nodes,
} = readDataAndGetEdges("test1.txt");

//step2_find root
const root = findRoot(tree1Edges);
const root_2 = findRoot(tree2Edges);

//step3_create tree
const tree = buildTree(tree1Edges, root);
const tree_2 = buildTree(tree2Edges, root_2);

//step4_assign variable to nodes
const variables_1 = generateVariables(tree, tree.height);
const variables_2 = generateVariables(tree_2, tree_2.height);

//step5_generate random list
const randomList = getRandomListForVariableValue(tree.leaves);

//step6_ assign random value to node
const variableNodes =
  getUniqueValues(variables_1).lenght > getUniqueValues(variables_2).lenght
    ? getUniqueValues(variables_1)
    : getUniqueValues(variables_2);

const nodesValues = assignRandomValues(variableNodes, randomList);

const values = getMatchingValues(variables_1, nodesValues);
const values_2 = getMatchingValues(variables_2, nodesValues);

//step7_ choose random number
const primeNumber = getRandomPrime(tree.leaves);

//step7_ calculate root value
const result_t1 = calculateRootValue(tree, values, primeNumber);
const result_t2 = calculateRootValue(tree_2, values_2, primeNumber);

//step7_ compare root value
if (result_t1 === result_t2) return console.log("YES");
else return console.log("NO");
