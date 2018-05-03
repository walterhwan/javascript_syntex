function weightedRandomIndex(arr) {
  let total = arr.reduce((acc, el) => acc + el, 0);
  let random = Math.floor(Math.random() * total + 1);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (random <= sum) {
      return arr[i];
    }
  }
}

console.log(weightedRandomIndex([1,8,18]));
