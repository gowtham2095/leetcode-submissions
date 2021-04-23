/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function constructQueue(people) {
    people.sort((a, b) => a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]);
    let result = [];
    result.push(people[0]);
    for (let i = 1; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i]);
    }
    return result;
}

var reconstructQueue = function(people) {
    return constructQueue(people);
};