/**
 * @param {string} s
 * @return {string}
 */

function isValidPali(s) {
    let i = 0;
    let j = s.length - 1;
    while(i <= j) {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
}

function longesPalindromeDP(s) {
    
    if (s.length <= 1)
        return s;
    let state = [];
    let longestString = s[0];
    let longestCount = 1;
    for(let i = 0; i < s.length; i++) {
        state[i] = [];
        state[i][i] = true;
    }
    for (let start = s.length - 1; start >= 0; start--) {
        for (let end = start + 1; end < s.length; end++) {
            if (s[start] == s[end]) {
                if (end - start == 1 || state[start + 1][end - 1] == true) {
                    state[start][end] = true;
                    if (end - start + 1 > longestCount) {
                        longestString = s.substring(start, end + 1);
                        longestCount = end - start + 1;
                    }
                }
            }
        }
    }
    
    return longestString;
}








var longestPalindrome = function(s) {
    // let substrings = [];
    // let maxStr = '';
    // let max = 0;
    // for (let i = 0; i <= s.length; i++) {
    //     for (let j = i + 1; j <= s.length; j++) {
    //         if(isValidPali(s.substring(i, j))) {
    //             let len = s.substring(i, j).length;
    //             if (len > max) {
    //                 maxStr = s.substring(i, j);
    //                 max = len;
    //             }
    //         }
    //     }
    // }
    // return maxStr;
    return longesPalindromeDP(s);
};


