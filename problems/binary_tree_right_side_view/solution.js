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
 * @return {number[]}
 */

function levelOrderTraversal(root) {
    let queue = [];
    queue.push({level: 0, node: root});
    let prevLevel = 0;
    let result = [];
    let stack = [];
    let bfs = [];
    while(queue.length) {
        let node = queue.shift();
        bfs.push(node);
        if (node.node.left) {
            queue.push({level: node.level + 1, node: node.node.left})
        }
        if (node.node.right) {
            queue.push({level: node.level + 1, node: node.node.right})
        }
    }
    let currentLevel = 0;
    let prevNode = bfs[0];
    let node;
    let i = 1;
    while(i < bfs.length) {
        node = bfs[i];
        if (node.level != prevNode.level) {
            result.push(prevNode.node.val);
        }
        prevNode = node;
        i++;
    }
    result.push(bfs[bfs.length - 1].node.val);
    return result;
    
}

function dfs(root, level, result) {
    if (root) {
        if (result.length == level) {
            result.push(root.val);
        }
        dfs(root.right, level + 1, result);
        dfs(root.left, level + 1, result);
    }
}

var rightSideView = function(root) {
    if (root == null)
        return [];
    let result = [];
    dfs(root,0, result);
    return result;
    // return levelOrderTraversal(root);
};


//   0          1 0
    
//   1      2       3

//   2   -1     5       4
