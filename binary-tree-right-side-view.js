/**
 * 199. Binary Tree Right Side View
    Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

    

    Example 1:
    https://assets.leetcode.com/uploads/2021/02/14/tree.jpg

    Input: root = [1,2,3,null,5,null,4]
    Output: [1,3,4]
    Example 2:

    Input: root = [1,null,3]
    Output: [1,3]
    Example 3:

    Input: root = []
    Output: []
 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // Initialize the result array to store the rightmost nodes' values
    let result = [];

    // If the root is null (i.e., the tree is empty), return the result array
    if(root === null) return result;
    
    // Initialize the queue with the root node
    let queue = [root];

    // Continue processing while there are nodes in the queue
    while(queue.length > 0) {
        // Get the number of nodes in the current level by checking the queue's length
        let size = queue.length;
        
        // Process all nodes at the current level
        for(let i = 0; i < size; i++) {
            // Remove the front node from the queue
            const curr = queue.shift();

            // If this is the last node in the current level (i.e., the rightmost node when viewed from the top),
            // add its value to the result array
            if(i === size - 1) {
                result.push(curr.val);
            }

            // If the current node has a left child, add it to the queue
            if(curr.left !== null) queue.push(curr.left);
            // If the current node has a right child, add it to the queue
            if(curr.right !== null) queue.push(curr.right);
        }
    }

    // Return the result array, which now contains the values of the rightmost nodes at each level
    return result;
};


class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Test Case 1
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.left = node2;
node1.right = node3;
node2.right = node5;
node3.right = node4;

// Test Case 2
let node6 = new Node(1);
let node7 = new Node(3);

node6.right = node7;

// Test Case 3
let node8 = null; // This represents an empty tree.

console.log(rightSideView(node1)); // Expected output: [1, 3, 4]
console.log(rightSideView(node6)); // Expected output: [1, 3]
console.log(rightSideView(node8)); // Expected output: []

