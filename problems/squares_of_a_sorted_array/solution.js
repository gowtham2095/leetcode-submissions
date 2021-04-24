/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 19 mins to solve the question

function sortedSquareValues(nums) {
    let i = 0;
    let result = [];
    while (i < nums.length && nums[i] < 0) {
        i++;
    }
    let p2 = i;
    let p1 = p2 - 1;
    
    while(p1 >= 0 && p2 < nums.length) {
        let a = nums[p1] * nums[p1];
        let b = nums[p2] * nums[p2];
        if (a < b) {
            result.push(a);
            p1--;
        } else {
            result.push(b);
            p2++;
        }
    }
    
    while(p1 >= 0) {
        let a = nums[p1] * nums[p1];
        result.push(a);
        p1--;
    }
    
    while(p2 < nums.length) {
        let b = nums[p2] * nums[p2];
        result.push(b);
        p2++;
    }
    return result;
}


function onePassSquared(nums) {
    let result = [];
    let i = 0; 
    let j = nums.length - 1;
    for (let p = nums.length - 1; p >= 0; p--) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result[p] = nums[i] * nums[i];
            i++;
        } else {
            result[p] = nums[j] * nums[j];
            j--;
        }
    }
    return result;
}

var sortedSquares = function(nums) {
    // return sortedSquareValues(nums);
    return onePassSquared(nums);
};



//algo

// 1) I will search for the first positive element

// 2) use two pointers solution 
//         i) compare Absolute of negative pointer and positive pointer
//         ii) whichever is lesser then add that square of element to the result






// [-4,-1,0,3,10]





// 8/5 =
    
    
// 5.6

// 2.6

// 1.6

// 1.4




