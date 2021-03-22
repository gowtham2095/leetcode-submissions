/**
 * @param {string} s
 * @return {string}
 */


function checkValidParans(s) {
    let stack = [];
    let i = 0;
    let closingBracketsToRemove = [];
    let removalIndicesMap = {
        
    };
    while(i < s.length) {
        if (s[i] == '(') {
            stack.push(i);
        } else if ( s[i] == ')') {
              if (stack.length == 0) {
                removalIndicesMap[i] = true;
              } else {
                  stack.pop();
              }
          

        }
        i++;
    }
    while(stack.length) {
        removalIndicesMap[stack.pop()] = true;
    }
    return removalIndicesMap;
}

function checkMinimumRemove(s) {
    let removalIndicesMap = checkValidParans(s);
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (!removalIndicesMap[i]) {
            res += s[i];
        }
    }
    return res;
}

var minRemoveToMakeValid = function(s) {
    return checkMinimumRemove(s);
};


