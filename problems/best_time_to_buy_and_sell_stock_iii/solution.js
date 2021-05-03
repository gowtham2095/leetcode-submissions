/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if (prices.length <= 1)
        return 0;
    let leftArray = [0];
    let prev = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prev) {
            max = Math.max(max, prices[i] - prev);
        } else {
            prev = prices[i];
        }
        leftArray.push(max);
    }
    
    let rightArray = [0];
    prev = prices[prices.length - 1];
    max = 0;
    for (let i = prices.length - 2; i >= 0; i--) {
        if (prev > prices[i]) {
            max = Math.max(max, prev - prices[i]);
        } else {
            prev = prices[i];
        }
        rightArray.unshift(max);
    }
    max = 0;
    // console.log(leftArray, rightArray)
    for (let i = 0; i < prices.length; i++) {
        max = Math.max(max, leftArray[i] + rightArray[i]);
    }
    return max;
};


// At most two transactions

// [3,3,5,0,0,3,1,4]

// [0, 0, 2, 2, 2, 3, 1, 4]
       
// [                      ]

// [3,3,5,0,0,3,1,4]
// [0,0,2,2,2,3,3,4]
// [4 4 2 2 2 1 3 0]
