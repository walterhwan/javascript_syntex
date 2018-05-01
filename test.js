
let array = [2,3,5,6,1,10,2,7,3];
// let max = arr.reduce((max, val) => val > max ? val : max, arr[0]);
// console.log(Math.max(...arr));
console.log(arrayManipulation(5, [[1,2,100], [2,5,100], [3,4,100]]));

function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);

    queries.forEach(query => {
      let fIdx = query[0];
      let sIdx = query[1];
      let num = query[2];
      for(let i = fIdx-1; i < sIdx; i++) {
        arr[i] += num;
      }
    });

    return arr.reduce((max, val) => val > max ? val : max, arr[0]);
}
