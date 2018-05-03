
function longestPalindrome(str) {
  let longest_pal_start_idxx
  let longest_length = 0;
  for (let i = 0; i < str.length; i++) {
    let scutartIndex = 0;


  }
}

function isPalindrome(string, start, length) {
  for(let i = 0; i < length/2; i++) {
    if (string[start + i] !== string[start+length-1-i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('repaper', 0, 7));
console.log(longestPalindrome('leirepaperwiels'));
