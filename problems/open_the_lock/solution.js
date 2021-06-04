/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

function canOpenLock(deadends, target) {
    let start = [[0,0,0,0], 0];
    let deadEndSet = new Set(deadends);
    // deadEndSet.add('9999');
    if (deadEndSet.has('0000')) {
        return -1;
    }
    let queue = [start];
    let cost = 0;
    while(queue.length) {
        let [pos, cost] = queue.shift();
        let uniqueKey = pos.join('');
        if (target == uniqueKey) {
            return cost;
        }
        for (let i = 0; i < pos.length; i++) {
            let tempPos = [...pos];
            if (tempPos[i] == 9) {
                tempPos[i] = 0;
            } else {
                tempPos[i] = tempPos[i] + 1;
            }
            let uniqKey = tempPos.join('');
            if (!deadEndSet.has(uniqKey)) {
                queue.push([tempPos, cost + 1]);
                deadEndSet.add(uniqKey);
            }
            let tempPos1 = [...pos];
            if (tempPos1[i] == 0) {
                tempPos1[i] = 9;
            } else {
                tempPos1[i] = tempPos1[i] - 1;
            }
            uniqKey = tempPos1.join('');
            if (!deadEndSet.has(uniqKey)) {
                queue.push([tempPos1, cost + 1]);
                deadEndSet.add(uniqKey);
            }
        }
    }
    return -1;
}

var openLock = function(deadends, target) {
    return canOpenLock(deadends, target);
};