/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
};

var review = ['a', 'b', 'c', 'b', 'a'];

review.forEach(function(item, index, object) {
  if (item === 'a') {
    object.splice(index, 1);
  }
});

console.log(review)