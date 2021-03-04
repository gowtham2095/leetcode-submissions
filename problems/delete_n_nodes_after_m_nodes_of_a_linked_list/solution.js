/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let curr = head;
    let mCount = 1;
    let nCount = 0;
    while(curr != null) {
        if (mCount == m) {
            mCount = 0;
            let lastMNodePtr = curr;
            while(curr.next != null && nCount != n) {
                curr = curr.next;
                nCount++;
            }
            lastMNodePtr.next = curr.next;
            nCount = 0;
        } else {
           curr = curr.next;
           mCount++;
        }
    }
    return head;
};