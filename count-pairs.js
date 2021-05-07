// add whatever parameters you deem necessary
function countPairs(nums, target) {
  // add nums to set
  const numsSet = new Set(nums);
  // init num of pairs to 0
  let pairs = 0;

  // for each num in set
  for (let num of numsSet) {
    // remove num from set
    numsSet.delete(num);
    // if target - num is in set
    if (numsSet.has(target - num)) {
      // add to num of pairs
      pairs++;
    }
  }

  // return num of pairs
  return pairs;
}
