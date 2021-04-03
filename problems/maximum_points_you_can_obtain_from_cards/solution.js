/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

function maxPointsFromCards(cardPoints, k) {
    let cumulativeSumFromLeft = [];
    let cumulativeSumFromRight = [];
    let i = 0;
    cumulativeSumFromLeft.push(cardPoints[i]);
    i++;
    let sum = 0;
    while (i < k) {
        sum = cardPoints[i] + cumulativeSumFromLeft[i - 1];
        cumulativeSumFromLeft.push(sum);
        i++;
    }
    let j = cardPoints.length - 1;
    cumulativeSumFromRight.push(cardPoints[j]);
    j--;
    let itr = 0;
    itr++;
    while(j >= cardPoints.length -k) {
        sum = cardPoints[j] + cumulativeSumFromRight[itr - 1];
        cumulativeSumFromRight.push(sum);
        itr++;
        j--;
    }
    i--;
    let max = cumulativeSumFromLeft[k - 1];
    k--;
    j = 0;
    
    while(k > 0) {
        k--;
        sum = cumulativeSumFromLeft[k] + cumulativeSumFromRight[j];
        max = Math.max(max, sum);
        j++;
    }
    max = Math.max(max, cumulativeSumFromRight[j]);
    return max;
}

var maxScore = function(cardPoints, k) {
    return maxPointsFromCards(cardPoints, k);
};




// cumulativeSumFromRight = []


// [9,7,7,9,7,7,9] 
// 0  1. 2 


// 1, 1000, 1
    

// [1, 79, 80, 1,  1,  1,  200,  1]
//  0  1    2  3   4   5   6     7



//  1  80  160 161 203  202      201     1

// 1, 79, 80, 1, 1, 1, 200, 1

// 1, 200, 1, 1, 1, 80, 79, 1


//         1,   200, 1,  1,                  


// 1       1    201. 202  203               

// 79     79    201  202  203         

// 80     160   201. 202  203      

// 1      161   201. 202. 203



//         9  7.  7

//     9,  9  16  23
        
//     7,  16  16 23    
        
//     7   23  30  37


//       1  79  80   1

// 1     1  80.  160. 161

// 200  201 201  201. 201

// 1    202 202  202. 202 

// 1    203  203

  

// [1,2,3,4,5,6,1]

//     1   2   3

// 1   1.   3.  6

// 6   7    7.  7

// 5   12   12. 12







// 1

// 1

// 200

// 1