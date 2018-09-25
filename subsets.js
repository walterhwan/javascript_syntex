function subsets(arr) {
  let len = arr.length;
  if (len === 0) return [[]];

  let prev = subsets(arr.slice(0, -1));
  let el = arr[len - 1];
  let current = prev.slice().map(subArr => {
    return subArr.concat(el);
  });
  return prev.concat(current);
}

console.log(subsets([1, 2, 3]));
