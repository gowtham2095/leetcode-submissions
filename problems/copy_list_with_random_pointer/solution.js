/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
[7,null],[13,0],[11,4],[10,2],[1,0]

// function cloneList(head, map) {
//     let ptr = head;
//     let secondHead = new Node(-1);
//     let secondPtr = secondHead;
//     while(ptr) {
//         let node = null;
//         let randomNode = null;
//         let temp = new Node(ptr.val)
//         map.set(ptr, temp);
//         secondPtr.next = temp;
//         secondPtr = secondPtr.next;
//         ptr = ptr.next;
//     }
//     ptr = head;
//     secondPtr = secondHead;
//     while(ptr) {
//         let random = ptr.random;
//         let randomNode = map.get(random);
//         secondPtr.random = randomNode;
//         secondPtr = secondPtr.next;
//         ptr = ptr.next;
//     }
//     return secondHead.next;
// }
function cloneNode(node, map) {
    if (map.get(node) == undefined && node != null) {
        let newNode = new Node(node.val);
        map.set(node, newNode);
    }
    return map.get(node);
}
function cloneList (head, map) {
    let ptr = head;
    let secondHead = new Node(-1);
    let secondPtr = secondHead;
    while (ptr) {
        secondPtr.next = cloneNode(ptr, map);
        secondPtr.next.random = cloneNode(ptr.random, map);
        ptr = ptr.next;
        secondPtr = secondPtr.next;
    }
    return secondHead.next;
}

var copyRandomList = function(head) {
    if (head == null)
        return null;
    let map = new Map();
    return cloneList(head, map)
};