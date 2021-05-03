/**
 * @param {number[]} prices
 * @return {number}
 */



function maximumProfit(prices) {
    let max = 0;
    let prev = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prev) {
            prev = prices[i];
        } else {
            max = Math.max(max, prices[i] - prev);
        }
    }
    return max;
}

var maxProfit = function(prices) {
    return maximumProfit(prices);
};










