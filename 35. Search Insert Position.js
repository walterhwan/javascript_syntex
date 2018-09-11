/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = (arr, target, start = 0, end = arr.length - 1) => {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((end + start) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) { // search left
        if (mid === start) {
            return start;
        }
        return searchInsert(arr, target, start, mid - 1); 
    } else { // search right
        if (mid === end) {
            return end + 1;
        }
        return searchInsert(arr, target, mid + 1, end);
    }
};