/**
 * @param {number[]} temperatures
 * @return {number[]}
 */



function warmerArray(temperatures) {
    let n = temperatures.length - 1;
    let stack = [{val: temperatures[n], index: n}];
    let result = [0];
    let i = n - 1;
    while(i >= 0) {
        while(stack.length && stack[stack.length - 1].val <= temperatures[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            result.push(0);
            stack.push({val: temperatures[i], index: i});
        } else {
            let top = stack[stack.length - 1].index;
            result.push(top - i);
            stack.push({val: temperatures[i], index: i});
        }
        i--;
    }
    return result.reverse();
}


var dailyTemperatures = function(temperatures) {
    if (temperatures.length == 0)
        return [];
    return warmerArray(temperatures);
};




// [73, 74, 75, 71, 69, 72, 76, 73]







//                                 stack - 76, 75 , 74, 73

//                                 result -                     1, 1, 4, 2,1,1,0, 0
// [1, 1, 4, 2, 1, 1, 0, 0]




// Algorithm



// i) Push last element to the stack
// ii) Check if the top of stack is greater than current element
//     i) If yes then do the index difference and push it to the result
//     ii) If no keep poping till the element is greater or till the stack is empty
//         i) And push the element
        