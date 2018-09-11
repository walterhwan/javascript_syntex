/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const TARGET = parseInt(process.env.TARGET || 1);
// console.log('target = %s', TARGET);

var searchRange = function(nums, target) {
    let range = [-1, -1];

    let leftIndex = searchEndpoint(nums, target, true);
    if (leftIndex >= nums.length || nums[leftIndex] != target) {
        return range;
    }

    let rightIndex = searchEndpoint(nums, target, false);

    return [leftIndex, rightIndex - 1];
};

const searchEndpoint = (arr, target, left) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if ((left && target === arr[mid] || arr[mid] > target)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};

let arr = [1,2,2,2,3,3,4,4];
let target = 2;
console.log(searchEndpoint(arr, target, true))
console.log(searchEndpoint(arr, target, false))
console.log(searchRange(arr, target))