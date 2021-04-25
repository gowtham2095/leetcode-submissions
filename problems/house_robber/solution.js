/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxiumumValueRobbed(arr, start, dp) {
	if (dp[start] != undefined) {
		return dp[start];
	}
	if (start == arr.length - 1 || start == arr.length - 2) {
		return dp[start] = arr[start];
	}
    let max = 0;
	for (let i = start + 2; i < arr.length; i++) {
		if (i != start + 1) {
            max = Math.max(arr[start] + findMaxiumumValueRobbed(arr, i, dp), max);
		}
	}
	return dp[start] = max;
}

var rob = function(nums) {
    let dp = []
    return Math.max(findMaxiumumValueRobbed(nums, 0, dp), findMaxiumumValueRobbed(nums, 1, dp));
};