

// function findSingleInArr(arr) {
//   let single = 0;
//   arr.forEach(el => {
//     single = single ^ el;
//   });
//
//   return single;
// }


function findSingleInArr(arr) {
  let mid = Math.floor(arr.length / 2);
  if (mid === 0) return arr[0];
  console.log('mid:' + mid);

  if (arr[mid] !== arr[mid-1] && arr[mid] !== arr[mid+1]) {
    return arr[mid];
  } else if (arr[mid] !== arr[mid-1]) {
    return findSingleInArr(arr.slice(0, mid-1));
  } else if (arr[mid] !== arr[mid+1]) {
    return findSingleInArr(arr.slice(mid+1, -1)) + mid;
  }
}


console.log(findSingleInArr([1,1,2,2,3,4,4]));
