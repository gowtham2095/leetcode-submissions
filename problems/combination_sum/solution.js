/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function findCombiSum(candidates, target, result, currentSet, start) {
    if (target == 0) {
        result.push([...currentSet]);
        currentSet = [];
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        if (target - candidates[i] >= 0) {
            currentSet.push(candidates[i]);
            findCombiSum(candidates, target - candidates[i], result, currentSet, i);
            currentSet.pop();
        }
    }
}


var combinationSum = function(candidates, target) {
    let result = [];
    findCombiSum(candidates, target, result, [], 0);
    return result;
};


     
     



