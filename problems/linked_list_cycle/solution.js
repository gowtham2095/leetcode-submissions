/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head && head.next;
    if (!fast)
        return false;
    
    while(slow != fast) {
        if (fast == null || fast.next == null) {
            return false
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
};




// 3, 2, 0 -4