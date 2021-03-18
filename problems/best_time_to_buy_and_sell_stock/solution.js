/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxStockValue = 0;
    let i = 0;
    let j = i + 1
    while(j < prices.length) {
        if(prices[i] < prices[j]) {
            maxStockValue = Math.max(prices[j]-prices[i], maxStockValue);
            j++;
        } else {
            i = j;
            j = j + 1;
        }
    }
    return maxStockValue;
};

