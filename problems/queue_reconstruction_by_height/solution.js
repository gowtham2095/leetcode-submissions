/**
 * @param {number[][]} people
 * @return {number[][]}
 */


function queueReconstruction(people) {
    people.sort((current, next) => {
       return current[0] == next[0] ? current[1] - next[1] : next[0] - current[0];
    });
    let result = [];
    for (let i = 0; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i]);
    }
    return result;
}

var reconstructQueue = function(people) {
    return queueReconstruction(people);
};




// [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]


// [[7,0], [5, 0], [6, 1], [7, 1], [5, 2], [4, 4]]

    

//      [5, 0], [7,0], [6, 1], [7, 1], [5, 2], [4, 4]

     


//     [5, 0], [7, 0] [6, 1], 

//     min = 5
//     max = 7