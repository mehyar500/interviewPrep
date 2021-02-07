/**
 * Depth-First Search
 * LIFO
 * Whereas the breadth-first search searches incremental edge lengths away from the source node, 
 * depth-first search first goes down a path of edges as far as it can.
 * 
 * Once it reaches one end of a path, 
 * the search will backtrack to the last node with an un-visited edge path and continue searching.
 * 
 * 
 */

function isFound(roots, i) {
    for(let k = 0; k < roots.length; ++k) {
      if(roots[k] == i) {
        return true;
      }
    }
    return false;
  }
  
  function dfs(graph, root) {
    let roots = [];
    let stack = [];
    stack.push(graph[root]);
    roots.push(root);
    while(stack.length > 0) {
      for(let i = 0 ; i < graph[root].length; ++i) {
        if(!isFound(roots, i) && stack[stack.length - 1][i] == 1) {
          stack.push(graph[i]);
          roots.push(i);
          i=0;
        }
      }
      stack.pop()
    }
    return r;
  }
  
  var exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(dfs(exDFSGraph, 3));


  // Recursive
    function dfs2(value, node) {

        if (node.value === value) {
        return node;
        }
    
        var len = node.children.length;
    
        for (var i = 0; i < len; i++) {
        var foundNode = dfs2(value, node.children[i]);
        if (foundNode) {
            return foundNode;
        }
        }
        return null;
  }

  // simple
  function dfs3(value, node) {

    stack = [];
  
    stack.push(node);
  
    while (stack.length != 0) {
      var curNode = stack.peek()
      if (curNode.value == value) {
        return curNode;
      }
      curNode.visited = true
      stack.push(getFirstUnvistedNode(curNode));
    }
  
  }