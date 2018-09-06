var longestPalindrome = function(string) {
  // let memory = {};
  // let length = -1;
  // let palPos = [0, 0];
  // for (let i = 0; i < string.length; i++) {
  //   for (let j = i; j < string.length; j++) {
  //     let word = string.slice(i, j + 1);
  //     // console.log("i, j = %s %s", i, j);
  //     let len = j - i;
  //     // console.log("word:%s", string.slice(i, j + 1));
  //     if (memory[word] && string.charAt(i) === string.charAt(j - 1)) {
  //       memory[word] = true;
  //       if (length < len) {
  //         length = len;
  //         palPos = [i, j + 1];
  //       }
  //       continue;
  //     }
  //     if (isPal(i, j, string)) {
  //       memory[word] = true;
  //       if (length < len) {
  //         length = len;
  //         palPos = [i, j + 1];
  //       }
  //     } else {
  //       memory[word] = false;
  //     }
  //   }
  // }

  // // console.log(memory);
  // return string.slice(...palPos);
  if (string === null || string.length < 1) return "";
  let start = 0,
    end = 0;
  for (let i = 0; i < string.length; i++) {
    let len1 = lenOfPalFromCenter(string, i, i);
    let len2 = lenOfPalFromCenter(string, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return string.slice(start, end + 1);
};

var lenOfPalFromCenter = function(string, left, right) {
  let L = left,
    R = right;

  while (L >= 0 && R < string.length && string[L] === string[R]) {
    L--;
    R++;
  }

  return R - L - 1;
};

// var isPal = function(start, end, word) {
//   let len = end - start + 1;
//   if (start === end) return true;
//   // let slice = word.slice(start, end + 1);
//   let j = Math.floor(len / 2) + start,
//     i = j;
//   if (len % 2 === 0) {
//     i = j - 1;
//   }

//   while (i >= start && j <= end) {
//     if (word[i] != word[j]) {
//       return false;
//     }
//     i--;
//     j++;
//   }

//   return true;
// };

let string = "babadhannaheio";
console.log(longestPalindrome(string));
