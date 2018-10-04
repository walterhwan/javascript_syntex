function subsets(arr) {
  let len = arr.length;
  if (len === 0) return [[]];

  let prev = subsets(arr.slice(0, -1));
  let current = prev.slice().map(el => {
    return [...el, arr[len - 1]];
  });

  return [...prev, ...current];
}

console.log(subsets([1]));
console.log(subsets([1, 2]));
console.log(subsets([1, 2, 3]));
// [] => [[]]
// [1] => [[], [1]]
// [1, 2] => [[], [1], [2], [1, 2]]
