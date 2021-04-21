/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeFromLL(head, val) {
    if (head == null)
        return null;
    let sentinelNode = new ListNode(-1);
    sentinelNode.next = head; 
    let ptr = sentinelNode;
    let prev = ptr;
    let curr = ptr.next;
    while(curr) {
        if (curr.val == val)
            prev.next = curr.next;
        else 
            prev = curr;
        curr = curr.next;
    }
    return sentinelNode.next;
}

var removeElements = function(head, val) {
    return removeFromLL(head, val);
};



// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 6