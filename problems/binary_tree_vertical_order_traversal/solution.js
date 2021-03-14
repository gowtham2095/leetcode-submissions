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
function traverseTreeDfs(root, value, hashmap, row) {
    if (root) {
        traverseTree(root.left, value -1, hashmap, row + 1);
        if (hashmap.get(value) == undefined) {
            let arr = [{ rowPos: row, value: root.val }];
            hashmap.set(value, arr);
        } else {
            let arr = hashmap.get(value);
            arr.push({value: root.val, rowPos: row});
        }
        traverseTree(root.right, value + 1, hashmap, row + 1);
    }
}


function traverseBfs(root, value, hashmap) {
    if (root == null)
        return [];
    
    let queue = [{node: root, col: value}];
    let minIndex = 0;
    let maxIndex = 0;
    let result = [];
    while(queue.length) {
        let firstElement = queue.shift();
        let hashmapListForCol;
        minIndex = Math.min(minIndex, firstElement.col);
        maxIndex = Math.max(maxIndex, firstElement.col);
        if (!hashmap.get(firstElement.col)) {
            hashmap.set(firstElement.col, []);
        }
        hashmapListForCol = hashmap.get(firstElement.col);
        hashmapListForCol.push(firstElement.node.val);
        if (firstElement.node.left) {
            queue.push({node: firstElement.node.left, col: firstElement.col -1});
        } 
        if (firstElement.node.right) {
            queue.push({node: firstElement.node.right, col: firstElement.col + 1});
        }
    }
    while(minIndex <= maxIndex) {
        result.push(hashmap.get(minIndex));
        minIndex++
    }
    return result;
} 

var verticalOrder = function(root) {
    let map = new Map();
    return traverseBfs(root, 0, map);
    
    
    // Use the below code for DFS traversal - But time complexity is pretty worse
    // let map = new Map();
    // traverseTreeDfs(root, 0, map, 0);
    // let entries = [ ...map.entries()];
    // entries.sort((a, b) => a[0] - b[0]);
    // let result = entries.map((a) => a[1]);
    // return result.map((ele) => ele.sort((a, b) => a.rowPos - b.rowPos).map((obj) => obj.value));
}

