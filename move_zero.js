function moveZero(arr) {
  let sorted = arr.slice();
  if (arr.length <= 1) {
    return arr;
  }

  let idx1 = 0;
  let idx2 = 1;
  while (idx2 < arr.length) {
    if (sorted[idx1] !== 0) {
      idx1 += 1;
    } else if (sorted[idx2] === 0) {
      idx2 += 1;
    } else {
      [sorted[idx1], sorted[idx2]] = [sorted[idx2], sorted[idx1]];
    }
  }
  return sorted;
}

// console.log(moveZero([0, 1, 0, 3, 5, 0]));
