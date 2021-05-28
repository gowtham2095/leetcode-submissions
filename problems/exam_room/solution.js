// /**
//  * @param {number} n
//  */
// var ExamRoom = function(n) {
    
// };

// /**
//  * @return {number}
//  */
// ExamRoom.prototype.seat = function() {
    
// };

// /** 
//  * @param {number} p
//  * @return {void}
//  */
// ExamRoom.prototype.leave = function(p) {
    
// };

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */


/**
 * @param {number} N
 */
var ExamRoom = function(N) {
    this.len=N;//For Length
    this.seats=new Array();//For Storing Used Seats (Sorted)
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
        
        /*If all seats empty*/
        if(this.seats.length<=0){
            this.seats.push(0);
            return 0;
        }

        let mx=-1;//for max diff
        let res=-1;//for seat-index
        
        /*
        Compare every 2 closest pairs of seats array
        */
        for(let i=0;i<this.seats.length-1;i++){
            let avg=Math.floor((this.seats[i]+this.seats[i+1])/2);
            let diff=avg-this.seats[i];
            if(diff>mx){
                mx=diff;
                res=avg;
            }
        }
        
        /*Left Boundary*/
        if(this.seats[0]>=mx){
            mx=this.seats[0];
            res=0;
        }
        /*Right Boundary*/
        if((this.len-1)-this.seats[this.seats.length-1]>mx){
            mx=(this.len-1)-this.seats[this.seats.length-1];
            res=(this.len-1);
        }
    
        /*Insert at appropriate index to maintain sorted order*/
        let flag=0;
        for(let i=0;i<this.seats.length;i++){
            if(this.seats[i]>res){
                this.seats.splice(i,0,res);
                flag=1;
                break;
            }
        }
        if(!flag)
            this.seats.push(res);
    
        /*Return result*/
        return res;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    let ind=this.seats.indexOf(p);
    this.seats.splice(ind,1);
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */


// 0, 1, 2, ..., n-1



// 10


// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// l                          r




// left = 0;
// right = 9


// left highest 


// right least

// occupied map -> 0, 9, 4, 2


// if left is not occupied allot left
// if right is not occupied allot right
// else if middle is not occupied allot middle


                

                


// 0 -> s1



// 9 -> s2