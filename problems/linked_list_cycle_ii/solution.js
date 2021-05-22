/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */



function findLoop(head) {
   let slow = head;
   let fast = head;
   while(fast != null && fast.next != null) {
       slow = slow.next;
       fast = fast.next.next;
       if (slow == fast) {
           return fast;
       }
       
   }
   return null;
}

function findStart(ptr1, ptr2) {
    while(ptr1 != ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
}
var detectCycle = function(head) {
    if (head == null) {
        return null
    }
    let loop = findLoop(head);
    if (loop != null) {
        let ptr1 = head;
        let ptr2 = loop;
        return findStart(ptr1, ptr2)
    }
    return null;
};



// 3 2 0 4

// 3





// 1. -> 2. -> 3 -> 4 
// 0.    1.    2    3










