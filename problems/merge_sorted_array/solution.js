/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


function sortArrays(nums1, m, nums2, n) {
   let p1 = m - 1;
   let p2 = n - 1;
   let p3 = m + n - 1
   
   while (p1 >= 0 && p2 >= 0) {
       if (nums1[p1] > nums2[p2]) {
           nums1[p3] = nums1[p1];
           p1--;
       } else {
           nums1[p3] = nums2[p2];
           p2--;
       }
       p3--;
   }
   
   while (p2 >= 0) {
       nums1[p3] = nums2[p2];
       p2--;
       p3--;
   }
}

var merge = function(nums1, m, nums2, n) {
    sortArrays(nums1, m, nums2, n);
};




// [1, 1, 8, 6, 2, 4]
// p1     p2            

// [1, 2, 4]
// p2



// 1, 2, 3, 2, 5, 6
//      p2  p2


     
     
     
     
// -1, 1, 3, 6, 4, 7, 8, 100


// 1, 2, 2, 0, 0, 0
//          p1

// 3, 5, 6
// p2           


// 1, 1, 3, 4, 7, 7, 100
// p2
// -1, 3, 7, 100
// p1    



        





