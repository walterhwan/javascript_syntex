var maxArea = function(height) {
  let res = 0;
  let i = 0;
  let j = height.length - 1;
  let current;

  while (i < j) {
    current = Math.min(height[i], height[j]) * (j - i);
    if (current > res) {
      res = current;
    }
    if (height[i] <= height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return res;
};

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
//         0,1,2,3,4,5,6,7,8
// output 49

console.log(maxArea(arr));
