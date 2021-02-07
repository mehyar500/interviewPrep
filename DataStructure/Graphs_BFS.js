/* Graphs: Breadth-first search
  FIFO
*/
/**
 * BFS is a traversing algorithm where you should start traversing from a selected node 
 * which is a source or starting node and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node). 
 * we must then move towards the next-level neighbour nodes.
 * As the name BFS suggests, you are required to traverse the graph breadthwise as follows:
 * First move horizontally and visit all the nodes of the current layer
 * Move to the next layer
 */

 // outputs key value pairs
 // key is node and value is its distancew from root
function bfs(graph, root) {
    var nodesLen = {};
    
    // we'll start all distances at infifinity
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0; 
    
    // we need to create a simple queue to keep track of nodes to visit
    var queue = [root]; 
    // keep track of current node
    var current; 
  
    // traversing untill there no nodes to traverse
    while (queue.length != 0) {

      // we'll start the loop by poping off a node from the queue to traverse 
      // which at the begeinningl, its the root node
      current = queue.shift();
      
      // we need to get all the nodes connected to the current node
      var curConnected = graph[current];
      // keep track of list of nodes connected to  current node
      var neighborIdx = []; 
      // we need to get the first node connected to the current node
      // because #1 in the array means its connected to that node at that index
      var idx = curConnected.indexOf(1); 
      // we need a loop to all the nodes connected to current
      while (idx != -1) {
        neighborIdx.push(idx); 
        idx = curConnected.indexOf(1, idx + 1); 
      }
      
      // loop through connected node and get the distance
      for (var j = 0; j < neighborIdx.length; j++) {
        // if the value in the nodeLen array at the index of the nieghbor from nieghbor index array == infinity
        // that means we haven't set the distance of that node yet
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]); 
        }
      }
    }
    return nodesLen;
  };
  
  var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(exBFSGraph, 1));