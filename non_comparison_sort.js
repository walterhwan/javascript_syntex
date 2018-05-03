
function sort1(arr) {
  let sorted = new Array(arr.length).fill(1).map((el, idx) => el + idx);
  return sorted;
}

// console.log(sort1([2,3,1]));

function sort2(arr, N) {
  let count = new Array(N+1).fill(0);
  arr.forEach(el => {
    count[el] += 1;
  });

  let sorted = [];
  count.forEach((times, idx) => {
    for (let i = 0; i < times; i++) {
      sorted.push(idx);
    }
  });

  return sorted;
}

// console.log(sort2([3,5,2,1,1], 5));

function sortString(strings, k) {
  let sorted = strings.slice();
  for (let i = k - 1; i >= 0; i--) {
    let bucket = Array.from(Array(26), () => new Array());
    console.log(bucket);
    strings.forEach((str) => {
      let idx = str.charCodeAt(i) - 'a'.charCodeAt(0);
      bucket[idx].push(str);
      console.log('push');
    });
    console.log(bucket);

    strings = bucket.reduce((acc, el) => {
      return acc.concat(el);
    });
  }

  return strings;
}

console.log(sortString(['car', 'cat', 'bat'], 3));
