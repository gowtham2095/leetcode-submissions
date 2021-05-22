/**
 * @param {string} moves
 * @return {boolean}
 */



function returnToOrigin(moves) {
    let start = [0, 0];
    let moveMap = {
        'L': [-1, 0],
        'R': [1, 0],
        'U': [0, 1],
        'D': [0, -1]
    }
    for (let move of moves) {
        let currentMove = moveMap[move];
        start[0] = start[0] + currentMove[0];
        start[1] = start[1] + currentMove[1];
    }
    return start[0] == 0 && start[1] == 0;
}
var judgeCircle = function(moves) {
    return returnToOrigin(moves);
};