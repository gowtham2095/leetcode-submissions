/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

function dfsPreorder(root, result) {
    if (root) {
        result.push(root.val);
        dfsPreorder(root.left, result);
        dfsPreorder(root.right, result);
    } else {
        result.push('e');
    }
}

var serialize = function(root) {
    let result = [];
    dfsPreorder(root, result);
    return result.join();
};

function formTree(treeArr) {
    let data = treeArr.shift();
    let root = null;
    if (data != 'e') {
        root = new TreeNode(data);
        root.left = formTree(treeArr);
        root.right = formTree(treeArr);
    }
    return root;
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let treeArr = data.split(',');
    let root = formTree(treeArr);
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */