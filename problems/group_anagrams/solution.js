/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function formAnagramArray(str) {
    let charMap = [];
    charMap.length = 26;
    charMap.fill(0);
    let i = 0;
    while( i < str.length) {
        charMap[str[i].charCodeAt(0) - 97]++;
        i++;
    }
    return charMap.join("#");
}

var groupAnagrams = function(strs) {
    let anagramMap = {};
    for(let i = 0; i < strs.length; i++) {
        let key = formAnagramArray(strs[i]);
        if (anagramMap[key] == undefined) {
            anagramMap[key] = [];
        }
        anagramMap[key].push(strs[i]);
    }
    let result = [];
    Object.keys(anagramMap).forEach((key) => {
        result.push(anagramMap[key]);
    });
    return result;
};



