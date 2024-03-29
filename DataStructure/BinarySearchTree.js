/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
      this.count = 1;
    }

    size() {
        return this.count;
    }
    
    add(data) {

      const node = this.root;

      if (node === null) {
        this.root = new Node(data);
        return;

      } else {

        const searchTree = function(node) {

          if (data < node.data) {

            if (node.left === null) {

              node.left = new Node(data);
              return;

            } else {

              return searchTree(node.left);
            }

          } else if (data > node.data) {

            if (node.right === null) {

              node.right = new Node(data);
              return;

            } else {
                
              return searchTree(node.right);
            }

          } else {

            return null;
          }

        };

        return searchTree(node);
      }
    }

    findMin() {
      let current = this.root;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
    }

    findMax() {
      let current = this.root;
      while (current.right !== null) {
        current = current.right;
      }
      return current.data;
    }

    find(data) {
      let current = this.root;
      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
        if (current === null) {
          return null;
        }
      }
      return current;
    }

    isPresent(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return true;
        }
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }

    remove(data) {
      const removeNode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          // node has no children 
          if (node.left == null && node.right == null) {
            return null;
          }
          // node has no left child 
          if (node.left == null) {
            return node.right;
          }
          // node has no right child 
          if (node.right == null) {
            return node.left;
          }
          // node has two children 
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
    
    isBalanced() {
      return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    // left, root, right
    inOrder() {
      if (this.root == null) {
        return null;
      } else {

        var result = new Array();

        function traverseInOrder(node) {
          if( node.left ) traverseInOrder(node.left);
          result.push(node.data);
          if( node.right ) traverseInOrder(node.right);
        }

        traverseInOrder(this.root);
        return result;

      };
    }

    // root, left, right
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePreOrder(node) {
          result.push(node.data);
          if(node.left) traversePreOrder(node.left);
          if(node.right) traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
    }

    // left, right, root
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePostOrder(node) {
          if(node.left) traversePostOrder(node.left);
          if(node.right) traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
    }
    
    // breadth first search
    // BFS
    // level by level
    // use a queue
    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };

    invert(node = this.root) {
        if (node) {
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            this.invert(node.left);
            this.invert(node.right);
          }
        return node;
    }
  }
  
  
  
  const bst = new BST();
  
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);
  
  console.log(bst.findMinHeight());
  console.log(bst.findMaxHeight());
  console.log(bst.isBalanced());
  bst.add(10);
  console.log(bst.findMinHeight());
  console.log(bst.findMaxHeight());
  console.log(bst.isBalanced());
  console.log('inOrder: ' + bst.inOrder());
  console.log('preOrder: ' + bst.preOrder());
  console.log('postOrder: ' + bst.postOrder());
  
  console.log('levelOrder: ' + bst.levelOrder());