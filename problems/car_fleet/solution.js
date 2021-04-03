/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function Car(pos, time) {
    this.pos = pos;
    this.time = time;
}

function computeFleet(target, pos, speed) {
    
    let cars = [];
    
    for (let i = 0; i < pos.length; i++) {
        // console.log()
        let time = (target - pos[i])/speed[i];
        cars.push(new Car(pos[i], time));
    }
    
    cars.sort((a, b) => a.pos - b.pos);
    // console.log(cars);
    let lastTime = -1;
    let count = 0;
    for (let i = pos.length - 1; i >= 0; i--) {
        if (cars[i].time > lastTime) {
            lastTime = cars[i].time;
            count++;
        }
    }
    return count;   
}

var carFleet = function(target, position, speed) {
    return computeFleet(target, position, speed)
};





// [10,8,0,5,3]


// 24

// 3






//        10  -
//         8
//         0
//         5
//         3


// 12, 12, 0, 6, 6
// [2,4,1,1,3]

// 10 + 2   = 12


// 8 + 4 = 12






// 5 + 1 = 6

// 3 + 3 = 6


// forEach [10,8,0,5,3]

//         10: 12

//         8: 12
        
//         0: 