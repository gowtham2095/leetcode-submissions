/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

function doublyLinkedList(root, result) {
    if (root) {
        doublyLinkedList(root.left, result)
        if (result.last) {
            result.last.right = root;
            root.left = result.last;
        } else {
            result.first = root;
        }
        result.last = root;
        doublyLinkedList(root.right, result)
    }
}
var treeToDoublyList = function(root) {
    if (!root) {
        return null;
    }
    let result = {
        first: null, 
        last: null
    }
    doublyLinkedList(root, result);
    result.first.left = result.last;
    result.last.right = result.first;
    return result.first;
    
};