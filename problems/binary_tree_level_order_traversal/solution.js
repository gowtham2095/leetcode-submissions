/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    
    let list = [];
    let result = []
    
    if (!root)
        return list;
    let i = 0;
    list.push({level: i, node: root});
    while(list.length) {
        let element = list.shift();
        let level = element.level;
        let node = element.node;
        if (!result[level]) {
            result[level] = [];
        }
        result[level].push(node.val);
        if (node.left) {
            list.push({level: level + 1, node: node.left});
        }
        if (node.right) {
            list.push({level: level + 1, node: node.right});
        }
    }
    return result;
};