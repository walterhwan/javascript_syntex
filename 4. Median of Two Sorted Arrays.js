var findMedianSortedArrays = function(nums1, nums2) {
  let min_index = 0, max_index, i, j, median, n, m;
  if (nums1.length < nums2.length) {
    n = nums1.length;

  } else {
    n = nums2.length;
  }
  max_index = n;

  while (min_index <= max_index) {
    i = (min_index + max_index) / 2;
    j = ((n + m + 1) / 2) - i;

    // if i = n, it means that Elements from a[] in
    // the second half is an empty set. and if j = 0,
    // it means that Elements from b[] in the first
    // half is an empty set. so it is necessary to
    // check that, because we compare elements from
    // these two groups.
    // Searching on right
    if (i < n && j > 0 && b[j - 1] > a[i]) {
      min_index = i + 1;
    }

    // if i = 0, it means that Elements from a[] in
    // the first half is an empty set and if j = m,
    // it means that Elements from b[] in the second
    // half is an empty set. so it is necessary to
    // check that, because we compare elements
    // from these two groups.
    // searching on left
    else if (i > 0 && j < m && b[j] < a[i - 1]) {
      max_index = i - 1;
    } else { // we have found the desired halves.
      // this condition happens when we don't have any
      // elements in the first half from a[] so we
      // returning the last element in b[] from
      // the first half.
      if (i == 0) {
        median = b[j - 1];
      } else if (j == 0) {
        median = a[i - 1];
      } else {
        median = maximum(a[i - 1], b[j - 1]);
      }
      break;
    }
  }


  // calculating the median.
  // If number of elements is odd there is
  // one middle element.
  if ((n + m) % 2 === 1) {
    return median;
  }

  // Elements from a[] in the second half is an empty set.
  if (i == n)
      return (median+b[j]) / 2.0;

  // Elements from b[] in the second half is an empty set.
  if (j == m)
      return (median + a[i]) / 2.0;

  return (median + minimum(a[i], b[j])) / 2.0;

  return sorted;

};


let nums1 = [1, 2];
let nums2 = [0, 3, 4, 5];

console.log(nums1.shift());
console.log(nums1);

console.log(findMedianSortedArrays(nums1, nums2));
