/**
 * @param {number[]} nums
 * @return {number[][]}
 */



function generateSets(nums, result, level, currentSet) {
    result.push([...currentSet]);
    for (let i = level; i < nums.length; i++) {
        currentSet.push(nums[i]);
        generateSets(nums, result, i + 1, currentSet);
        currentSet.pop(nums[i]);
    }
}

var subsets = function(nums) {
    let result = [];
    generateSets(nums, result, 0, []);
    return result;
};


// 1, 2, 3
                    

// [1,2,3]



// 0 - []

// 1 - 1, 2, 3


// 2 - 1, 2.    1, 3


// 3 - 1, 2, 3




//                     []

//                 1                  2       3


//             2       3              3


//         3