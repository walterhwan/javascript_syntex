
function subsets(arr) {
  if (arr.length === 0) return [[]];
  let prev = subsets(arr.slice(0, -1));
  let el = arr[arr.length-1];
  let current = prev.slice().map(subArr => {
    return subArr.concat(el);
  });
  return prev.concat(current);
}

console.log(subsets([1, 2, 3]));
