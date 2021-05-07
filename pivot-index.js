// add whatever parameters you deem necessary
function pivotIndex(nums) {
  // if len of nums < 3, return -1
  if (nums.length < 3) {
    return -1;
  }

  // start with pivot index on 2nd num
  let pvtIdx = 1;
  // set left sum to 1st num
  let leftSum = nums[0];
  // set right sum to sum of nums on right of pivot
  let rightSum = 0;
  for (let i = 2; i < nums.length; i++) {
    rightSum += nums[i];
  }

  // while pivot isn't on last num
  while (pvtIdx < nums.length - 1) {
    // if sums are equal, return pivot index
    if (leftSum === rightSum) {
      return pvtIdx;
    }
    // add pivot to left sum
    leftSum += nums[pvtIdx];
    // increment pivot index by 1
    pvtIdx++;
    // subtract new pivot from right sum
    rightSum -= nums[pvtIdx];
  }

  // return -1
  return -1;
}
