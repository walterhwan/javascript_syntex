/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}
const reverseArray = (nums, start, end) => {
    let mid = (end - start) / 2 + start ;
    for (let i = start, j = end; i <= mid; i++, j--) {
        swap(nums, i, j)
    }

    return nums;
}
const nextPermutation = (nums) => {
    if (!nums || nums.length <= 1) return;
    let i = nums.length - 2, len = nums.length;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i === -1) {
        console.log('i == -1')
        reverseArray(nums, 0, len - 1);
        return;
    }

    let j = i + 1;
    while (nums[j + 1] > nums[i] && j < len) {
        j++;
    }

    console.log('i = %s', i);
    console.log('j = %s', j);
    swap(nums, i, j);

    reverseArray(nums, i + 1, len - 1);
    
    return nums;
};

console.log(nextPermutation([1,4,3,2]));
console.log(nextPermutation([5,1,1]));
