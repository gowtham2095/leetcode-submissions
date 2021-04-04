/**
 * @param {string} num
 * @return {boolean}
 */



function isStrobo(num) {
    let nonStrobo = ['2', '3', '4', '5', '7'];
    
    let p1 = 0;
    let p2 = num.length - 1;
    if (num.length == 1) {
        if (num == '6' || num == '9')
            return false;
        return nonStrobo.includes(num[0]) ? false : true;
    }
        
    while(p1 <= p2) {
        if (nonStrobo.includes(num[p1]) || nonStrobo.includes(num[p2])) {
            return false;
        }
        
        if (num[p1] == '6') {
            if (num[p2] == '9') {
                p1++;
                p2--;
                continue;
            } else {
                return false;
            }
        }
        
        if (num[p1] == '9') {
            if ( num[p2] == '6') {
                p1++;
                p2--;
                continue;
            } else {
                return false;
            }

        }
        if (num[p1] != num[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
}

var isStrobogrammatic = function(num) {
    return isStrobo(num);
};


// 69



// 962


// 1991
// 1890681




// 11




// 1, 8, 0


// 6 then at the other end it should be 9



// 2, 3 4, 5, 7



