/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function oddEvenLinked(head) {
    let p1;
    let p2;
    if (head == null || head.next == null)
        return head;
    
    let firstHead = head;
    let secondHead = head.next;
    p1 = head;
    p2 = head.next;
    
    while(p1.next && p2.next) {
        if (p1.next && p1.next.next) {
            p1.next = p1.next.next;
            p1 = p1.next;
        }
        if (p2.next) {
            p2.next = p2.next.next;
            p2 = p2.next;
        }
    }
    p1.next = secondHead;
    return firstHead;
}
var oddEvenList = function(head) {
    return oddEvenLinked(head);
};