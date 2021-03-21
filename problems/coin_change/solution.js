/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

function coinChangeCoins(coins, amount, dpMap) {
    let min = Infinity;
    if (amount == 0)
    {
       return 0;
    }
    if (dpMap[amount]) {
        return dpMap[amount];
    }
    for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
            min = Math.min(min, 1 + coinChangeCoins(coins, amount - coins[i], dpMap));
        }
    }
    dpMap[amount] = min;
    return min;
}



function coinChangeBottomUp(coins, amount) {
    let dp = [];
    dp[0] = 0;
    let sum = 0;
    
    while(++sum <= amount) {
        let min = -1;
        for (let i = 0; i < coins.length; i++) {
            if (sum >= coins[i] && dp[sum - coins[i]] != -1) {
                let temp = 1 + dp[sum - coins[i]];
                min = min < 0 ? temp : ((min < temp) ? min : temp);
            }
        }
        dp[sum] = min;
    }
    return dp[sum - 1];
}

var coinChange = function(coins, amount) {
    // let dpMap = {};
    // let val = coinChangeCoins(coins, amount, dpMap);
    // console.log(dpMap);
    // return val == Infinity ? -1 : val;
    
    return coinChangeBottomUp(coins, amount);
};




