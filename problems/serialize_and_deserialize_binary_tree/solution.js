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

function preOrder(root, str = '') {
    function buildString(node) {
        if (node == null) {
            str += 'e' + ','
        } else {
            str += node.val + ','
            buildString(node.left, str);
            buildString(node.right, str);
        }
    }
    buildString(root);
    return str;
}


var serialize = function(root) {
    return preOrder(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

function parse(str) {
    let dataSplit = str.split(',');
    function buildTree() {
        let node = dataSplit.shift();
        if (node == 'e') {
            return null;
        } else {
            let newNode = new TreeNode(node);
            newNode.left = buildTree();
            newNode.right = buildTree();
            return newNode;
        }
    }
    return buildTree();
}

var deserialize = function(data) {
    return parse(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

