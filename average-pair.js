// add whatever parameters you deem necessary
function averagePair(nums, target) {
  // special case for array less than 2 nums, return false
  if (nums.length < 2) {
    return false;
  }

  // initialize 2 pointers to start and end of nums
  let left = 0;
  let right = nums.length - 1;

  // while 1st pointer !== 2nd pointer
  while (left !== right) {
    const average = (nums[left] + nums[right]) / 2;
    // if the average of the 2 nums pointed at = target, return true
    if (average === target) {
      return true;
    }
    // otherwise if > target, move 2nd pointer to left
    else if (average > target) {
      right--;
    }
    // otherwise move 1st pointer to right
    else {
      left++;
    }
  }

  // couldn't find pair with target as ave, return false
  return false;
}
