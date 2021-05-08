/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function findAllTrees(n) {
    if (n <= 0 || n % 2 == 0)
        return [];
    let res = [];
    if (n == 1) {
        res.push(new TreeNode(0));
        return res;
    }
    for (let i = 1; i < n; i = i + 2) {
        let leftTrees = findAllTrees(i);
        let rightTrees = findAllTrees(n-i-1);
        for (let l of leftTrees) {
            for (let r of rightTrees) {
                let root = new TreeNode(0);
                root.left = l;
                root.right = r;
                res.push(root);
            }
        }
    }
    return res;
}

var allPossibleFBT = function(n) {
    return findAllTrees(n);
};






//                     0


//         0                       0



//                          0            0



//                 if (n != 0)
//                     root = new Node(0);
//                     root.left = dfs(n - 1);
//                     root.right = dfs(n -1);
//                 else
//                     root = null;
                
                

//                         0


//                 0               


//             0       0


//         0       0