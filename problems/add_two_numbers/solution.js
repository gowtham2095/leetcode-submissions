/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = null;
    let ptr = null;
    let temp = null;
    let sum = 0;
    while(l1 != null || l2 != null) {
        sum = 0;
        if (l1) {
            sum = l1.val;
            l1 = l1.next;

        }
        if (l2) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        sum = sum + carry;
        carry = Math.floor(sum/10);
        sum = sum % 10;
        temp = new ListNode(sum);
        if (!result) {
            result = temp;
            ptr = result;
        } else {
            ptr.next = temp;
            ptr = ptr.next
        }
    }
    if (carry) {
        ptr.next = new ListNode(carry);
    }
    return result;
};