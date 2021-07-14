/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var listReversal = function(head) {
    let pointer1 = null;
    let pointer2 = head;
    let temp = null;
    while(pointer2 != null) {
        temp = pointer2.next;
        pointer2.next = pointer1;
        pointer1 = pointer2;
        pointer2 = temp;
    }
    return pointer1
}
var isPalindrome = function(head) {
    let count = 0;
    let pointer = head;
    while(pointer) {
        count++;
        pointer = pointer.next;
    }
    let mid = Math.floor(count / 2);
    let isEven = count % 2 === 0;
    let p2 = head;
    let midCount = mid;
    while(mid--) {
        p2 = p2.next;
    }
    
    if (!isEven)
        p2 = p2.next;
    
    p2 = listReversal(p2);
    while(midCount--) {
        if (p2.val != head.val)
            return false
        p2 = p2.next;
        head = head.next;
    }
    return true
}