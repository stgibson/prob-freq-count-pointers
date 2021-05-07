// add whatever parameters you deem necessary
function longestFall(nums) {
  // keep track if longest sequence found thus far
  let longestSeqLen = 0;
  // keep track if length of curr sequence
  let currSeqLen = 0;

  // for each num
  let prevNum = Number.MIN_VALUE;
  for (let num of nums) {
    // if num < previous num, increment curr sequence
    if (num < prevNum) {
      currSeqLen++;
    }
    // else, update longest sequence & reset curr sequence to 1
    else {
      longestSeqLen = Math.max(longestSeqLen, currSeqLen);
      currSeqLen = 1;
    }
    prevNum = num;
  }
  // update longest sequence to max of itself and curr sequence
  longestSeqLen = Math.max(longestSeqLen, currSeqLen);

  // return longest sequence length
  return longestSeqLen;
}
