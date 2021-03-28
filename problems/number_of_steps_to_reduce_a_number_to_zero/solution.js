/**
 * @param {number} num
 * @return {number}
 */
function countSteps(num) {
    if (num)
        return num % 2 == 0 ? 1 + countSteps(num/2) : 1 + countSteps(num - 1);
    else
        return 0;
}
var numberOfSteps  = function(num) {
    return countSteps(num);
};