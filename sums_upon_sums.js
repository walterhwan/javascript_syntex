
function sumUponSums(arr) {
  arr = arr.sort();
  let num = 0;
  for (let i = 0; i < arr.length; i++, num++) {
    if (arr[i] !== num) return num;
  }

  return null;
}


function sumUponSums2(arr) {
  let len = arr.length;
  let sum = len * (len + 1) / 2;

  arr.forEach(el => {
    sum -= el;
  });

  return sum;
}

console.log(sumUponSums([6,7,5,9,1,0,2,4,3]));
console.log(sumUponSums2([6,7,5,9,1,0,2,4,3]));
