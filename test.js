// let arr = [[4, 1, 3], [1, 2, 3], [0, 100, 101]];

// const lowestCost = arr => {
//   let arr2 = arr.slice();

//   for (let i = 1; i < arr2.length; i++) {
//     arr2[i][0] += Math.min(arr2[i - 1][1], arr2[i - 1][2]);
//     arr2[i][1] += Math.min(arr2[i - 1][0], arr2[i - 1][2]);
//     arr2[i][2] += Math.min(arr2[i - 1][0], arr2[i - 1][1]);
//   }

//   return Math.min(...arr2[arr2.length - 1]);
// };

// console.log(lowestCost(arr));