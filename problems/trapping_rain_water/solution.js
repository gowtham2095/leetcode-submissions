/**
 * @param {number[]} height
 * @return {number}
 */

function trapWater(height) {
    let leftWall = height[0];
    let i = 1;
    let waterSaved = 0;
    let leftSum = 0
    while(i < height.length) {
        if (height[i] > leftWall) {
            waterSaved += leftSum;
            leftWall = height[i];
            leftSum = 0;
        } else {
            leftSum += leftWall - height[i];
        }
        i++;
    }
    let rightWall = height[height.length - 1];
    let j = height.length - 1;
    let rightSum = 0;
    while (j >= 0) {
        if (height[j] >= rightWall) {
            waterSaved += rightSum;
            rightWall = height[j];
            rightSum = 0;
        } else {
            rightSum += rightWall - height[j];
        }
        j--;
    }
    
    return waterSaved;
}

var trap = function(height) {
    return trapWater(height);
};


// [0,1,0,2,1,0,1,3,2,1,2,1]


//     [2,1,   ]

     
     
//      leftWall rightWall
     
//      rightWall > prevWall
     