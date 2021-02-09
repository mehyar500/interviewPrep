/**
 * Tree Traversal recursively
 *  
 */


/**
 * breadth first search 
 * each level of the tree is printed in order
 */
const breadthFirst = (startingNode, callback) => {
    const queue = [startingNode]

    while(queue.length) {
        const node = queue.shift();
        callback(node)
        queue.push(node.children)
    }
}


/**
 * depth first search pre order 
 * children nodes are visited before sibling nodes all the way down
 */

const depthFirstPreOrder = (startingNode, callback) => {
    callback(startingNode)
    startingNode.children.forEach(node => {
        depthFirstPreOrder(node, callback)
    })
}


/**
 * depth first search post order 
 * a node is not traversed until all it's children are reached 
 */

 const depthFirstPostOrder = (startingNode, callback) => {
     startingNode.children.forEach(node => {
         depthFirstPostOrder(node, callback)
     })

     callback(startingNode)
 }