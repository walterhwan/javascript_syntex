function fast_intersection(arr1, arr2) {
  let record = {};

  arr1.forEach((el) => {
    if (record[el]) {
      record[el] += 1;
    } else {
      record[el] = 1;
    }
  });

  arr2.forEach((el) => {
    if (record[el]) {
      record[el] += 1;
    } else {
      record[el] = 1;
    }
  });

  let interseciton = [];
  for (const key in record) {
    if (record[key] >= 2) {
      interseciton.push(key);
    }
  }

  return interseciton;
}

function subsets(arr) {
  if (arr.length === 0) return [[]];
  let prev = subsets(arr.slice(0, -1));
  let el = arr[arr.length-1];
  let current = prev.slice().map(subArr => {
    return subArr.concat(el);
  });
  return prev.concat(current);
}

function common_subsets(arr1, arr2) {
  return subsets(fast_intersection(arr1, arr2));
}

let arr1 = [1,3,5,7,9];
let arr2 = [3,4,5,6,7];

console.log(common_subsets(arr1, arr2));
