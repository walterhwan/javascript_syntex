function lookAndSay(arr) {

  // result = [[]]
  let result = [];
  // say = [count, num]
  let currentNum = arr[0];
  let count = 0;
  // iterate through the array, when encounter different num push the say array to result
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currentNum) {
      count++;
    } else {
      result.push([count, currentNum]);
      count = 1;
      currentNum = arr[i];
    }
  }
  result.push([count, currentNum]);

  return result;
}

// console.log(lookAndSay([1, 2, 1, 1])); //== [[1, 1], [1, 2], [2, 1]]
// console.log(lookAndSay([1, 2, 2, 1, 1])); //== [[1, 1], [2, 2], [2, 1]]
