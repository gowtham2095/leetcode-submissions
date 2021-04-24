/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


function formStringAfterKRemoval(s, k) {
    if (s.length == 0)
        return s;
    let stack = [{ch: s[0], count: 1}];
    let i = 1; 
    
    while(i < s.length) {
        let top = stack[stack.length - 1];
        if (stack.length && top.ch == s[i]) {
            if (top.count + 1 == k) {
                let count = top.count;
                while (count) {
                    stack.pop();
                    count = count - 1;
                }
            } else {
                stack.push({ch: s[i], count: top.count + 1});
            }
        } else {
            stack.push({ch: s[i], count: 1});
        }
        i++;
    }
    return stack.map((ele) => ele.ch).join('');
}

var removeDuplicates = function(s, k) {
    return formStringAfterKRemoval(s, k);
};

// 1) if the next character is different from top character then make the nextcharacter push to be starting with 1 count

// 2) and if the character to be added is same as previous character then add opne to the previous count and push it to the stack

// 3) if the count is reached to be k then pop till k and continye the loop

// 4) in the end send back the resulting stack

// aa



// stack 