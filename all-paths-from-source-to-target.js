/**
 * 797. All Paths From Source to Target
    Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

    The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

    

    Example 1:
    https://assets.leetcode.com/uploads/2020/09/28/all_1.jpg

    Input: graph = [[1,2],[3],[3],[]]
    Output: [[0,1,3],[0,2,3]]
    Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
    
    Example 2:
    https://assets.leetcode.com/uploads/2020/09/28/all_2.jpg

    Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
    Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

 */
const _allPathsSourceTarget = (graph, currNode, path, allPaths) => {
    // Add the current node to path
    path.push(currNode);

    // Check if the current node is the target (last node)
    if (currNode === graph.length - 1) {
        // Make sure to clone the path
        allPaths.push([...path]);
    } else {
        // Continue DFS for neighbors
        for (let nextNode of graph[currNode]) {
            _allPathsSourceTarget(graph, nextNode, path, allPaths);
        }
    }

    // Remove the current node from path for backtracking
    path.pop();
};

var allPathsSourceTarget = function(graph) {
    let allPaths = [], path = [];
    _allPathsSourceTarget(graph, 0, path, allPaths);
    return allPaths;
};    


// The graph represented as an adjacency list
let graph = [[1,2],[3],[3],[]]

// Function call
console.log(allPathsSourceTarget(graph));
