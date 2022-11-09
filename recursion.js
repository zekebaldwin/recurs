/** product: calculate the product of an array of numbers. */

//[5,6,7]
function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

// longest(['hello', 'yes', 'no'])
function longest(words, idx = 0, longestYet = 0) {
  if (idx === words.length) return longestYet;
  if (words[idx].length > longestYet) {
    longestYet = words[idx].length;
  }
  return longest(words, idx + 1, longestYet);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, empty = "") {
  if (idx === str.length) return empty;
  if (idx % 2 === 0) {
    empty += str[idx];
  }
  return everyOther(str, idx + 1, empty);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return val;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  if (idx === -1) return newStr;
  newStr += str[idx];
  return revString(str, idx - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
// [1,2,3,4,5,6,7,8,9,10,11], 9
function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
