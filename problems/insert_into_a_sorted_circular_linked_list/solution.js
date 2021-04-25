/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

// 30 Mins

function insertNode(prev, curr, node) {
    while(1) {
        if (prev.val <= node.val && curr.val >= node.val) {
            prev.next = node;
            node.next = curr;
            return;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
}


function findMinMax(head) {
    let prev = head;
    let curr = head.next;
    let set = new Set();
    set.add(prev);
    while (!set.has(curr) && prev.val <= curr.val) {
        prev = curr;
        curr = curr.next;
    }
    
    return [prev, curr];
}
var insert = function(head, insertVal) {
    let node = new Node(insertVal);
    if (head == null) {
        node.next = node;
        return node;
    }
    let [prev, curr] = findMinMax(head);
    if (insertVal <= curr.val || insertVal >= prev.val) {
        prev.next = node;
        node.next = curr;
        return head;
    }
    insertNode(curr, curr.next, node);
    return head;
};

// [1, 3, 5]



// 1) create a node with insertVal anywho
// 2) 




// 3 -> 4


// Node is lesser than given Value move forward
// if node is greater than given value stop



// Move to a point where the node is lesser than the given value




//  4 -> 5-> 6 -> 1 -> 2 -> 4

//                  1.5             


// if I start with a head where value is greater than nodeValue

//     Keep moving forward till I find the value lesser than node value
    
// else if I start with a headValue where the value is lesser than NodeValue then 
//      regular insert

// insert 2



// if NodeValue is lesser than the lowest or the nodeValue is greater than the Highest

// then insert it between highest and lowest


