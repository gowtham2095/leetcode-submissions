/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

const inOrder = function inorderTraversalReturnFirstFind(root) {
    if (root.left) {
        return inorderTraversalReturnFirstFind(root.left)
    } else {
        return root;
    }
}

const isLeftChild = function isLeft(root) {
    let parent = root.parent;
    let leftChild = parent.left;
    return leftChild == root;
}

const isRightChild = function isRight(root) {
    let parent = root.parent;
    let rightChild = parent.right;
    return rightChild == root;
}

const findSuccessorForRightChild = function findSuccessor(node) {
    if (node && node.parent) {
        if (isLeftChild(node)) {
            return node.parent;
        } else {
            return findSuccessor(node.parent);
        }
    } else {
        return null;
    }
    
}

var inorderSuccessor = function(node) {
    if (node) {
        if (node.right) {
            return inOrder(node.right);
        } else if (node.parent && isLeftChild(node)) {
            return node.parent;
        } else if (node.parent && isRightChild(node)) {
            return findSuccessorForRightChild(node.parent);
        }        
    }
    return null;
};