// add whatever parameters you deem necessary
function isSubsequence(str1, str2, startIdx1=0, startIdx2=0) {
  // if startIdx1 is passed end of str1, return true
  if (startIdx1 >= str1.length) {
    return true;
  }
  
  // for each char in str2 starting with startIdx2
  for (let i = startIdx2; i < str2.length; i++) {
    // if char in str1 at startIdx1 matches char in str2
    if (str1[startIdx1] === str2[i]) {
      // return true if rest of str1 subseq of rest of str2, false otherwise
      return isSubsequence(str1, str2, startIdx1 + 1, i + 1);
    }
  }
  
  // return false
  return false;
}
