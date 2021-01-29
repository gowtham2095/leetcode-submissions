/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

function constructDuplicateTree(root) {
    let node = null;
    if (root) {  
        node = new Node(root.val);
        root.children.forEach((child) => {
            node.children.push(constructDuplicateTree(child))
        });
    }
    return node;
}

var cloneTree = function(root) {
    let duplicateTree = null;
    if (root != null) {
        duplicateTree = constructDuplicateTree(root);
    }
    return duplicateTree;
};