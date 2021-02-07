/* Graphs: Breadth-first search */
/**
 * BFS is a traversing algorithm where you should start traversing from a selected node 
 * which is a source or starting node and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node). 
 * we must then move towards the next-level neighbour nodes.
 * As the name BFS suggests, you are required to traverse the graph breadthwise as follows:
 * First move horizontally and visit all the nodes of the current layer
 * Move to the next layer
 */

function bfs(graph, root) {
    var nodesLen = {};
    
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0; 
    
    var queue = [root]; 
    var current; 
  
    while (queue.length != 0) {
      current = queue.shift();
      
      var curConnected = graph[current];
      var neighborIdx = []; 
      var idx = curConnected.indexOf(1); 
      while (idx != -1) {
        neighborIdx.push(idx); 
        idx = curConnected.indexOf(1, idx + 1); 
      }
      
      for (var j = 0; j < neighborIdx.length; j++) {
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