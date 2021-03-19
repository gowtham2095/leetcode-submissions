/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function reverseList(head) {
    if (!head)
        return null;
    let curr = head;
    let nextNode = head.next;
    curr.next = null;
    while(nextNode) {
        let temp = nextNode.next;
        nextNode.next = curr;
        curr = nextNode;
        nextNode = temp;
    }
    return curr;
}

function mergeList(first, second) {
    let prehead = new ListNode(-1);
    let prev = prehead;
    let isOdd = true;
    while (first && second) {
        if (isOdd) {
            prehead.next = first;
            first = first.next;
            isOdd = false
        } else {
            prehead.next = second;
            second = second.next;
            isOdd = true;
        }
        prehead = prehead.next;
    }
    return prehead.next;
}

function findMiddleNode(head) {
    let slow = head;
    let fast = head && head.next;
    if (!fast) {
        return head;
    }
    while(fast != null) {
        slow = slow.next;
        fast = fast.next && fast.next.next;
    }
    return slow;
}

var reorderList = function(head) {
    let middleNode = findMiddleNode(head);
    let newList = reverseList(middleNode);
    console.log(newList)
    return mergeList(head, newList);
};





// 1 -> 2 -> 3 -> 4 -> 5



