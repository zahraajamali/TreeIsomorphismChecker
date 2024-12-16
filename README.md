# Tree Isomorphism Checker

This is a JavaScript program to determine whether two rooted trees are isomorphic (structurally identical). It processes input from a file (`input1.txt`) and outputs the result as either **YES** or **NO**.

## Problem Overview

Two rooted trees are considered **isomorphic** if a one-to-one correspondence exists between their nodes, preserving the parent-child relationships.

### Input Format

- The first line contains an integer `n` — the number of nodes in each tree.
- The next `n-1` lines describe the edges of the **first tree** in the form `parent child`.
- The subsequent `n-1` lines describe the edges of the **second tree** in the same format.

### Output Format

- The program outputs `YES` if the trees are isomorphic.
- Otherwise, it outputs `NO`.

## Implementation Details

- **Randomized Algorithm**: Polynomial hashing is used to compare the structure of the two trees efficiently.
- **Handling Large Values**: Modular arithmetic ensures that the polynomial hash values do not overflow.
- **Complexity**: The solution has a time complexity of approximately **O(n log n)**, making it suitable for large inputs.

### Key Steps in the Algorithm:

1. Assign a polynomial hash value to each node based on its children.
2. Use recursive functions to compute these values for all nodes.
3. Compare the root hashes of the two trees to determine isomorphism.

## Author

Developed as part of an algorithm homework exercise to explore tree isomorphism detection using randomized polynomial hashing.
