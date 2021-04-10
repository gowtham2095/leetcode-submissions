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



    
function removeDuplicates(head) {
    if (head == null)
        return null;
    let prev = head;
    let curr = prev.next;
    while(curr) {
        if (curr.val == prev.val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
}

var deleteDuplicates = function(head) {
    return removeDuplicates(head)
};