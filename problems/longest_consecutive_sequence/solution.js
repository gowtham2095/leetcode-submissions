/**
 * @param {number[]} nums
 * @return {number}
 */

function getLongestConsecutive(nums, set) {
    let i = 0;
    let longestStreak = 0;
    while (i < nums.length) {
        if (!set.has(nums[i] - 1)) {
            let num = nums[i];
            let index = i;
            let currentStreak = 1;
            num = num + 1;
            while(set.has(num)) {
                currentStreak++;
                num = num + 1;
            }
            longestStreak = Math.max(currentStreak, longestStreak);
        }
        i++;
    }
    return longestStreak;
}

var longestConsecutive = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    return getLongestConsecutive(nums, set);
};

