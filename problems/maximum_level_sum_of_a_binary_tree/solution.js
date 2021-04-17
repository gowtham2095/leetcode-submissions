/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

function QueueLinked() {
    this.head = new Node(-1);
    this.tail = this.head;
    this.queueSize = 0;
}

QueueLinked.prototype.enqueue = function(val) {
    let node = new Node(val);
    this.tail.next = node;
    this.tail = this.tail.next;
    this.queueSize++;
}

QueueLinked.prototype.dequeue = function() {
    let temp = this.head.next;
    this.head = this.head.next;
    this.queueSize--;
    return temp.val;
}

function findMaxSum(root) {
    
    let maxSum = -Infinity;
    let maxIndex = -1;
    let queue = new QueueLinked();
    let level = 1;
    queue.enqueue({node: root, value: root.val, level: 1});
    while(queue.queueSize) {
        let queueNode = queue.dequeue();
        let levelSum = queueNode.value;
        let left = queueNode.node.left;
        let right = queueNode.node.right;
        let currentLevel = queueNode.level;
        let dequeueSize = queue.queueSize;
        while(dequeueSize) {
            if (left) {
                queue.enqueue({level: currentLevel + 1, node: left, value: left.val});
            }
            if (right) {
                queue.enqueue({level: currentLevel + 1, node: right, value: right.val});
            }
            let queueNode = queue.dequeue();
            let sum = queueNode.value;
            levelSum += sum;
            dequeueSize = dequeueSize - 1;
            left = queueNode.node.left;
            right = queueNode.node.right;
        }
        if (left) {
            queue.enqueue({level: currentLevel + 1, node: left, value: left.val});
        }
        if (right) {
            queue.enqueue({level: currentLevel + 1, node: right, value:  right.val});
        }
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxIndex = currentLevel
        }      
    }
    return maxIndex;
}


var maxLevelSum = function(root) {
    return findMaxSum(root)
};


