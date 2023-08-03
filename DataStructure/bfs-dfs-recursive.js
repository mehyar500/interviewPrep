/**
 * Tree Traversal recursively
 *  
 */

/**
 * Tree Traversal iteratively
 * code eplination: we check if the root is null, if it is, we return.
 * we create a stack and push the root into the stack.
 * while the stack is not empty, we pop the stack and print the value.
 * we check if the right node is not null, if it is not null, we push it into the stack.
 * we check if the left node is not null, if it is not null, we push it into the stack.
 * 
*/
const depthFirstWhile = (root) => {
    if(root === null) return;
    let stack = [root];
    while(stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.val);
        if(curr.right !== null) stack.push(curr.right);
        if(curr.left !== null) stack.push(curr.left);
    }
}

/**
 * Tree Traversal recursively
 * depthFirstPreOrder
 * code eplination: we check if the root is null, if it is, we return.
 * we print the value of the root.
 * we call the depthFirstPreOrder function recursively on the left node.
 * we call the depthFirstPreOrder function recursively on the right node.
 * order: root, left, right
 */
const depthFirstPreOrder = (root) => {
    if(root === null) return;
    console.log(root.val);
    depthFirstPreOrder(root.left);
    depthFirstPreOrder(root.right);
}

/**
 * Tree Traversal recursively
 * depthFirstPostOrder
 * code eplination: we check if the root is null, if it is, we return.
 * we call the depthFirstPostOrder function recursively on the left node.
 * we call the depthFirstPostOrder function recursively on the right node.
 * we print the value of the root.
 * order: left, right, root
 */
const depthFirstPostOrder = (root) => {
    if(root === null) return;
    depthFirstPostOrder(root.left);
    depthFirstPostOrder(root.right);
    console.log(root.val);
}

/**
 * Tree Traversal recursively
 * depthFirstInOrder
 * code eplination: we check if the root is null, if it is, we return.
 * we call the depthFirstInOrder function recursively on the left node.
 * we print the value of the root.
 * we call the depthFirstInOrder function recursively on the right node.
 * order: left, root, right
 */
const depthFirstInOrder = (root) => {
    if(root === null) return;
    depthFirstInOrder(root.left);
    console.log(root.val);
    depthFirstInOrder(root.right);
}

/**
 * Tree Traversal iteratively
 * breadthFirst
 * code eplination: we check if the root is null, if it is, we return.
 * we create a queue and push the root into the queue.
 * while the queue is not empty, we shift the queue and print the value.
 * we check if the left node is not null, if it is not null, we push it into the queue.
 * we check if the right node is not null, if it is not null, we push it into the queue.
 * 
 */
const breadthFirst = (root) => {
    if(root === null) return;
    let queue = [root];
    while(queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val);
        if(curr.left !== null) queue.push(curr.left);
        if(curr.right !== null) queue.push(curr.right);
    }
}
