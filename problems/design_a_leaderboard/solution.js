
var Leaderboard = function() {
    this.playerScoreTable = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.playerScoreTable.get(playerId)) {
         score += this.playerScoreTable.get(playerId);
    }
    this.playerScoreTable.set(playerId, score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let result = []
    for (let ele of this.playerScoreTable.values()) {
        result.push(ele);
    }
    console.log(result);
    return result.sort((a, b) => b - a).filter((elem, index) => index < K).reduce((a, el) => a = a+el);
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.playerScoreTable.delete(playerId);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */