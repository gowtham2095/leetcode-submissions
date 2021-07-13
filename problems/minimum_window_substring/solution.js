/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function mininumWindow(s, t) {
    let targetMap = {};
    let i = 0;
    while(i < t.length) {
        if (targetMap[t[i]] == undefined)
            targetMap[t[i]] = 0;
        targetMap[t[i]]++;
        i++;
    }
    let left = 0;
    let right = 0;
    let windowCount = 0;
    let windowMap = {};
    let leftMin = -1;
    let rightMin = -1;
    let targetCount = Object.keys(targetMap).length;
    let min = Infinity;
    while(right < s.length) {
        if (windowMap[s[right]] == undefined)
            windowMap[s[right]] = 0;
        windowMap[s[right]]++;
        if (windowMap[s[right]] == targetMap[s[right]]) {
            windowCount++;
        } 
        while(windowCount == targetCount && left <= right) {
            if (right - left < min) {
                leftMin = left;
                rightMin = right;
                min = right - left;
            }
            windowMap[s[left]]--;
            if (windowMap[s[left]] < targetMap[s[left]]) {
                windowCount--;
            }
            left++;
        }
        right++;
    }
    return leftMin == -1 ? '' : s.slice(leftMin, rightMin + 1);
}

var minWindow = function(s, t) {
    return mininumWindow(s, t);
};