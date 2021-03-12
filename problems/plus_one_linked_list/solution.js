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


function traverseList(head, carry) {
    if (head.next) {
        traverseList(head.next, carry);
    }
    let val = head.val;
    val = val + carry.val;
    if(val == 10) {
        carry.val = 1;
        val = 0;
        head.val = 0;
    } else {
        head.val = val;
        carry.val = 0;
    }
}

var plusOne = function(head) {
    let carry = {
        val: 1
    }
    traverseList(head, carry)
    if (carry.val) {
        let newHead = new ListNode(1)
        newHead.next = head;
        return newHead;
    }
    return head;
};

