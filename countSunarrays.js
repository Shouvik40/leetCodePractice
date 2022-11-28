// https://leetcode.com/contest/weekly-contest-321/problems/count-subarrays-with-median-k/

var countSubarrays = function (nums, k) {
  let kInd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == k) {
      kInd = i;
    }
  }
  let right = {};
  let diff2 = 0;
  for (let i = kInd + 1; i < nums.length; i++) {
    if (nums[i] > k) {
      diff2++;
    } else {
      diff2--;
    }
    right[diff2] = (right[diff2] || 0) + 1;
  }
  right[0] = (right[0] || 0) + 1;
  let diff1 = 0;
  let ans = 0;
  // console.log(right);
  for (let i = kInd - 1; i >= 0; i--) {
    if (nums[i] > k) {
      diff1++;
    } else {
      diff1--;
    }
    if (right[1 - diff1] !== undefined) {
      ans += right[1 - diff1];
    }
    if (right[0 - diff1] !== undefined) {
      ans += right[0 - diff1];
    }
  }
  if (right[1 - 0] !== undefined) {
    ans += right[1 - 0];
  }
  if (right[0 - 0] !== undefined) {
    ans += right[0 - 0];
  }
  // console.log(right);
  return ans;
};

let nums = [3, 2, 1, 4, 5],
  k = 4; //3
// let nums = [2, 3, 1],
//   k = 3;

// let nums = [2, 5, 1, 4, 3, 6],
//   k = 1;

// let nums = [2, 5, 1, 4, 3, 6],
//   k = 1; //3
console.log(countSubarrays(nums, k));
