/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

// Boundary case mistake

// function getTimeSpentByFunctions(n, logs) {
//     let stack = [];
//     let funcMap = {}; 
//     let firstLog = logs[0].split(':');
//     // console.log(firstLog);
//     stack.push([Number(firstLog[0]), Number(firstLog[2])]);
//     funcMap[firstLog[0]] = Number(firstLog[2]);
//     for (let i = 1; i < logs.length; i++) {
//         let [id, type, timeStamp] = logs[i].split(':');
//         let lastStackValue = stack.pop();
//         if (type == 'end') {
//             funcMap[id] = funcMap[id] + (timeStamp - lastStackValue[1]) + (timeStamp == 0 ? 0 : 1);
//             if (stack.length) {
//                 stack[stack.length - 1][1] = Number(timeStamp) + 1;
//             }
//         } else {
//             if (funcMap[id] == undefined)
//                 funcMap[id] = 0;
//             let lastId = lastStackValue[0];
//             funcMap[lastId] = funcMap[lastId] + (timeStamp - lastStackValue[1]) + (lastStackValue[1] == 0 ? 0 : 1);
//             stack.push([Number(lastId), Number(timeStamp)]);
//             stack.push([Number(id), Number(timeStamp)]);
//         }
//         console.log(funcMap, stack);
//     }
//     let result = []
//     for (let i = 0; i < n; i++) {
//         result[i] = funcMap[i] || 0;
//     }
//     return result;
// }

// var exclusiveTime = function(n, logs) {
//     return getTimeSpentByFunctions(n, logs);
// };


// Correct solution

var exclusiveTime = function(n, logs) {
    const sums = new Array(n).fill(0);
    const stack = [];
    let prevTime;
    logs.forEach(log => {
        const details = log.split(':');
        const id = parseInt(details[0]);
        const point = details[1];
        const time = parseInt(details[2]);
        if (point === 'start') {
            // If the stack is not empty, we need to increment the sum 
            // of the previous function from previous start time to now
            if (stack.length > 0) {
			    let prevFn = stack[stack.length - 1];
                sums[prevFn] += (time - prevTime);      
            }
            stack.push(id); // Push this function onto the stack
            prevTime = time; // Set the previous start time to the time now
        } else {
            const last = stack.pop(); // Get the last function to start from the top of the stack 
            sums[last] += (time - prevTime + 1); // Increment the sum from start to end, inclusive
            prevTime = time + 1; // Set the previous start time to be one after this function ended
        }
    });
    return sums;
};





// 0: 2 + 1

// 1: 3

// 0:start:0

// 1:start:2


    
// 1) Recursive or any new Function if it is start then add the time till the new function and push it back

// 2) If it is end type then add the timeDifference and push


// ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"]

// 0: 7

// 1: 



// 1: 1


// stack =
    
//     1





// 0 - 2, 0 - 2,



