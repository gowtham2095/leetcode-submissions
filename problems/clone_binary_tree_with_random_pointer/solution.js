/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */

function cloneTree(root, map) {
        if (root) {
            if (map.has(root)) {
                return map.get(root);
            }
            let head = new NodeCopy(root.val);
            map.set(root, head);
            head.left = cloneTree(root.left, map);
            head.right = cloneTree(root.right, map);
            head.random = cloneTree(root.random, map);
            return head;
        } else {
            return null;
        }
}

var copyRandomBinaryTree = function(root) {
    let map = new Map();
    return cloneTree(root, map);
};
