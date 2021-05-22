/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */


function formLetterGroup(word) {
    let targetList = [];
    let i = 0;
    let prev = word[i];
    i++;
    let letterCount = 1;
    while (i < word.length) {
        if (prev == word[i]) {
            letterCount++;
        } else {
            targetList.push([prev, letterCount]);
            letterCount = 1;
        }
        prev = word[i];
        i++;
    }
    if (letterCount) {
        targetList.push([prev, letterCount]);
    }
    return targetList;
}

function isMatch(word1, target, level) {
    if (word1.length == level)
        return true;
    let targetList = target[level];
    let currentList = word1[level];
    let isCharMatch = targetList[0] == currentList[0];
    let canStretch = true;
    if (targetList[1] == 2) {
        canStretch = currentList[1] == targetList[1];
    } else if (currentList[1] > targetList[1]) {
        canStretch = false;
    }
    return isCharMatch && canStretch && isMatch(word1, target, level + 1);
}

var expressiveWords = function(s, words) {
    let targetList = formLetterGroup(s);
    let currentList = [];
    for (let word of words) {
        let list = formLetterGroup(word);
        currentList.push(list);
    }
    let count = 0;
    for (let list of currentList) {
        if (list.length == targetList.length) {
            let isValid = isMatch(list, targetList, 0);
            if (isValid)
                count++;
        }
    }
    return count;
};


// "aaa"

// ["aaaa"]

// // h: 1
// // e: 1
// // l: 2
// // o: 1