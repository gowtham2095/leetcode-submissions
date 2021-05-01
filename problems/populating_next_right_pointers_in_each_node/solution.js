/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */


// function linkLeftRight(leftNode, rightNode) {
//     if (leftNode) {
//         leftNode.right.next = rightNode.left;
//         linkLeftRight(leftNode.right, rightNode.left);
//     }
// }


// function formNext(root) {
//     if (root) {
//         formNext(root.left)
//         formNext(root.right)
//         if (root.left && root.right) {
//             root.left.next = root.right;
//         }
//     }
// }


// function topDown(left, right) {
//     if (root) {
//         if (root.left && root.right) {
//             root.left.next = root.right;
//         }
//         topDown(root.left);
//         topDown(root.right);
//     }
// }



function populateNextPointers(root) {
    let cur = root;
    while(cur.left) {
        let head = cur;
        while(head) {
            head.left.next = head.right;
            if (head.next) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        cur = cur.left;
    }
    return root;
}

var connect = function(root) {
    // formNext(root);
    // topDown(root);
    if (!root)
        return null;
    populateNextPointers(root);
    return root;
};


// [-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13]


            
//                                         -1

//                         0              ->                 1


//             2        ->           3               4        ->           5


//         6    ->   7           8   ->     9         10  ->  11          12    ->      13




            



//                1,2,3,4,5,6,7





//                             1

//                 2                      3


        
//         4           5               6         7
               


//   8.   ->    9. ->  10. ->  9           11. -> 12  ->  13. -> 14

//         BFS approach is straighforward but takes N space
        
        
        
        
        
        
         
        