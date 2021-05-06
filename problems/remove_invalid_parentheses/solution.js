/**
 * @param {string} s
 * @return {string[]}
 */



// Before 40 mins then good
function findMinimumChangesToMake(s) {
    let leftCount = 0;
    let rightCount = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            leftCount++;
        } else if (s[i] == ')') {
            if (leftCount == 0) {
                count++;
            } else {
                leftCount--;
            }
        }
    }
    return leftCount + count;
}


function findStrComb(s, result, size, i, leftCount, str) {
    if (size == 0 && i == s.length) {
        return leftCount == 0 && result.add(str);
    } else if (size < 0 || i >= s.length || leftCount < 0) {
        return;
    } else {
        if (s[i] == '(') {
            findStrComb(s, result, size - 1, i + 1, leftCount + 1, str + '(');
            findStrComb(s, result, size, i + 1, leftCount, str);
        } else if (s[i] == ')') {
                findStrComb(s, result, size - 1, i + 1, leftCount - 1, str + ')');
                findStrComb(s, result, size, i + 1, leftCount, str);
        } else {
            findStrComb(s, result, size, i + 1, leftCount, str + s[i]);
        }
    }
}



var removeInvalidParentheses = function(s) {
    let minRemoval = findMinimumChangesToMake(s);
    let result = new Set();
    let charCount = 0;
    let charStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ')' && s[i] != '(') {
            charCount++;
            charStr += s[i];
        }
    }
    // console.log(charCount, minRemoval)
    let removalSize = s.length - (charCount + minRemoval);

    if (removalSize == 0) {
        if (charCount) {
            return [charStr];
        } else {
            return [''];
        }
    }
    else {
        findStrComb(s, result, removalSize, 0, 0, '');
        return [...result.values()];
    }
};

