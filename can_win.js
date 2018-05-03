
function canWin(arr, idx, seen = {}) {
  if (seen[idx] || idx < 0 || idx >= arr.length) return false;

  if (arr[idx] === 0) {
    return true;
  } else {
    let goRight = canWin(arr, idx + arr[idx], seen);
    let goLeft = canWin(arr, idx - arr[idx], seen);
    if (goRight || goLeft) {
      return true;
    } else {
      seen[idx] = true;
      return false;
    }
  }
}

console.log(canWin([1, 0, 1], 0));
console.log(canWin([1, 2, 0], 0));
