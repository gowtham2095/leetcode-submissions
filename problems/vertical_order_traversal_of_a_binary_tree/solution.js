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

function traverseInorder(root, pos, level, map, minMax) {
    if (root) {
        if (map[pos] == undefined) {
            map[pos] = {};
        }
        if (map[pos][level] == undefined) {
            map[pos][level] = [];
        }
        map[pos][level].push(root.val);
        if (minMax.min > pos) {
            minMax.min = pos;
        }
        if (minMax.max < pos) {
            minMax.max = pos;
        }
        if (minMax.maxLevel < level) {
            minMax.maxLevel = level;
        }
        traverseInorder(root.right, pos + 1, level + 1, map, minMax);
        traverseInorder(root.left, pos - 1, level + 1, map, minMax);
    }
}

var verticalTraversal = function(root) {
    if (!root)
        return [];
    let posMap = {}
    let minMax = {
        min: 0,
        max: 0,
        maxLevel: 0
    }
    let result = [];
    traverseInorder(root, 0, 0, posMap, minMax);
    result = [];
    for (let i = minMax.min; i <= minMax.max; i++) {
        if (posMap[i] != undefined) {
            let elements = [];
            for (let j = 0; j <= minMax.maxLevel; j++) {
                if (posMap[i][j] != undefined) {
                    posMap[i][j].sort((a, b) => a - b);
                    elements = [...elements, ...posMap[i][j]];
                }
            }
            result.push(elements);
        }
    }
    return result;
};


// [0,7,1,null,10,2,null,11,null,3,14,13,null,null,4,null,null,null,null,12,5,null,null,6,9,8]





//                                                 0


//                         7                                                   1


//               null              10                                 2            null


//                         11          null                    3           14          


//                     13      null                    null        4   null    null

//                 null       null 

// // [1,2,3,4,6,5,7]

//                     1
        
//             2               3


//     4               6   
//                     5               7

                    
//         0: 3, 15
//         -1: [9]
//         1: [20]
//         2: [7]

// [3,9,20,null,null,15,7]




//                                   3(0)

//                        9 (-1)                   20 (1)
                    



//                                     15 (0)                7  (2)
            
                

// 1) inorderDfs


                                
