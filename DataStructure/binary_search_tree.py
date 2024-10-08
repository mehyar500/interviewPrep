# binary_search_tree.py

class Node:
    def __init__(self, data, left = None, right = None):
        self.data = data
        self.left = left
        self.right = right

class BinarySearchTree:
    def __init__(self):
        self.root = None
        self.count = 0

    def size(self):
        return self.count

    def add(self, data):
        node = self.root

        if node is None:
            node = Node(data)
            self.count += 1
        else:
            def searchTree(node):
                if(data < node.data):
                    if(node.left is None):
                        node.left = Node(data)
                        self.count += 1
                        return
                    else:
                        return searchTree(node.left)
                elif (data > node.right):
                    if(node.right is None):
                        node.right = Node(data)
                        self.count += 1
                        return
                else:
                    return None

            return searchTree(node)



if __name__ == "__main__":
    bst = BinarySearchTree()

    bst.add(9)
    bst.add(4)
    bst.add(17)
    bst.add(3)
    bst.add(6)
    bst.add(22)
    bst.add(5)
    bst.add(7)
    bst.add(20)

    print(bst.size())

    # print(bst.findMinHeight())
    # print(bst.findMaxHeight())
    # print(bst.isBalanced())
    # bst.add(10)
    # print(bst.findMinHeight())
    # print(bst.findMaxHeight())
    # print(bst.isBalanced())
    # print('inOrder: ' + bst.inOrder())
    # print('preOrder: ' + bst.preOrder())
    # print('postOrder: ' + bst.postOrder())

    # print('levelOrder: ' + bst.levelOrder())