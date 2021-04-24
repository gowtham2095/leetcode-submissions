/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNode(head, meta) {
    if (head) {
        removeNode(head.next, meta);
        if (meta.nextNodePointed) {
            head.next = meta.nextNode;
            meta.nextNodePointed = null;
        }
        if (meta.count === 0) {
            meta.nextNode = head.next;
            meta.nextNodePointed = true;
        }
        meta.count = meta.count - 1;
    }
    
}

function removeNthNode(head, n) {
    let p1 = head;
    while (n--) {
        p1 = p1.next;
    }
    if (p1 == null)
        return head.next;
    let prev = null;
    let p2 = head;
    while (p1) {
        prev = p2;
        p2 = p2.next;
        p1 = p1.next;
    }
    prev.next = p2.next;
    return head;
}

var removeNthFromEnd = function(head, n) {
//     let meta = {
//         count: n - 1,
//         isNodeDeleted: false,
//         nextNode: null,
//         nextNodePointed: false
//     };
    
//     removeNode(head, meta);
//     if (meta.nextNodePointed) {
//         head = meta.nextNode;
//     }
    
    // return head;
    return removeNthNode(head, n);
};