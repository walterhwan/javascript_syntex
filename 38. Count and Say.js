/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let result = "1";
  for (let i = 1; i < n; i++) {
    result = sayNum(result);
  }

  return result;
};

const sayNum = nums => {
  let result = "";
  let lastNum = nums[0];
  let count = 1;

  nums.split("").forEach((num, idx) => {
    // console.log("num = %s", num);
    // console.log("count = %s", count);
    if (idx === 0) return; // return true to break
    if (lastNum === num) {
      count++;
    } else {
      result += count + lastNum;
      count = 1;
    }
    lastNum = num;
  });
  result += count + lastNum;

  return result;
};

console.log(countAndSay(5));
