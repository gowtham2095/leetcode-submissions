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
var reverseList = function(head) {
    if (head) {
        let curr = head;
        let nextNode = curr.next;
        curr.next = null;
        while (nextNode)
        {
            let temp = nextNode.next;
            nextNode.next = curr;
            curr = nextNode;
            nextNode = temp;
        }
        
        return curr;
    }
    return null;
};





// 1 - 2 - 3 - 4 - 5

//     c   n

// 2 -> 1

// c
// let curr = head;
// let nextNode = curr.next;
// while (nextNode)
//     {
//         temp = nextNode.next
//         nextNode.next = curr;
//         curr = nextNode;
//         nextNode = temp
        
//     }