/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.forEach((item, index) => {
        while(item === nums[index + 1]){
            nums.splice(index + 1, 1);
        }
     });
    
    return nums;
};

// var review = ['a', 'b', 'c', 'b', 'a'];

// review.forEach(function(item, index, object) {
//   if (item === 'a') {
//     object.splice(index, 1);
//   }
// });

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))