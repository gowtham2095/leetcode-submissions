/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */

function findRootNode(tree) {
    if (tree.length === 1)
        return tree[0]
    
    let xorVal = 0
    tree.forEach((node) => {
        xorVal = xorVal ^ node.val;
        node.children.forEach((child) => {
            xorVal = xorVal ^ child.val;
        });
    });
    
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].val == xorVal)
            return tree[i];
    }
}

var findRoot = function(tree) {
    if (tree.length)
        return findRootNode(tree);
};