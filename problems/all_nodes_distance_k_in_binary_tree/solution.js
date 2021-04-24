/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */

// Mistake

// function findNodesOfKDistance(root, target, k) {
//     let result = new Set();
    
//     let isTargetSeen = false;
//     let targetDepth = -1;
//     let isSeen = new Set();

//     function dfsTopDown(rootNode, K, depth) {
//         if (rootNode) {
//             // console.log(depth, rootNode.val)
//             if (depth == K) {
//                 // console.log('test')
//                 result.add(rootNode.val);
//             }
//             if (depth > K)
//                 return;
//             if (!isSeen.has(rootNode.left && rootNode.left.val));
//                 dfsTopDown(rootNode.left, k, depth + 1);
            
//             if (!isSeen.has(rootNode.right && rootNode.right.val))
//                 dfsTopDown(rootNode.right, k, depth + 1);
//         }
//     }
    
//     dfsTopDown(target, k, 0);
//     // console.log(result);
    
//     function dfsBottomUp(root, target, k, depth) {
//         if (root) {
//             dfsBottomUp(root.left, target, k, depth + 1);
//             dfsBottomUp(root.right, target, k, depth + 1);
//             if (isTargetSeen) {
//                     console.log(root.val, depth, targetDepth);
//                     if (Math.abs(depth - targetDepth) == k)
//                     {
//                         result.add(root.val);
//                         isTargetSeen = false;
//                     }
//                     else if (Math.abs(depth - targetDepth) < k) {
//                         dfsTopDown(root, Math.abs(depth - targetDepth), 0);
//                     }
//             }
//             if (root == target) {
//                 isTargetSeen = true;
//                 targetDepth = depth;
//             }
//             isSeen.add(root.val)
//         }
//     }
    
//     dfsBottomUp(root, target, k, 0);
    
//     console.log(result);
    
//     return result


// }


// [3,5,1,6,2,0,8,null,null,7,4]


//                     3

//             5               1  

//     6           2        0          8

//             7       4




// I will do a bfs and save parent node information at each level parent node information


// Second time when I do a bfs I perform the k search from the target node with each chilren and parent


// Solved it in 25 mins

function formParentNode(root) {
    let queue = [root];
    while(queue.length) {
        let currentVisit = queue.shift();
        if (currentVisit.left) {
            currentVisit.left.parent = currentVisit;
            queue.push(currentVisit.left);
        }
        if (currentVisit.right) {
            currentVisit.right.parent = currentVisit;
            queue.push(currentVisit.right);
        }
    } 
}

function findKNode(root, target, k) {
    let visited = new Set();
    let result = [];
    let queue = [{node: target, level: 0}];
    let level
    while(queue.length) {
        let {node, level} = queue.shift();
        
        visited.add(node);
        if (!visited.has(node.left) && node.left) {
            if (level + 1 == k) {
                result.push(node.left.val)
            } else {
                queue.push({node: node.left, level: level + 1});
            }
        }
        
        if (!visited.has(node.right) && node.right) {
            if (level + 1 == k) {
                result.push(node.right.val)
            } else {
                queue.push({node: node.right, level: level + 1});
            }
        }
        
        if (!visited.has(node.parent) && node.parent) {
            if (level + 1 == k) {
                result.push(node.parent.val)
            } else {
                queue.push({node: node.parent, level: level + 1});
            }
        }
    }
    return result;
}



var distanceK = function(root, target, K) {
    // if (root == null)
    //     return []
    // return findNodesOfKDistance(root, target, K);
    if (K == 0)
        return [target.val];
    formParentNode(root);
    return findKNode(root, target, K);
};



// [0,1,null,null,2,null,3,null,4]




//                 0


//         1            2
    
//                             3

//                                 4