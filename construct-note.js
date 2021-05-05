function getFrequencies(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] + 1) || 1;
  }
  return freq;
}

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  // create 2 objects that store frequency of chars in msg and letters
  const msgCharFreq = getFrequencies(msg);
  const lettersCharFreq = getFrequencies(letters);

  // for each letter in freq. obj for msg
  for (let char in msgCharFreq) {
    // if it isn't in freq. object for letter
    if (!lettersCharFreq[char]) {
      // can't construct note, so return false
      return false;
    }
    // if its value is greater than its value in freq. obj for letters
    if (msgCharFreq[char] > lettersCharFreq[char]) {
      // can't construct note, so return false
      return false;
    }
  }
  // can construct note, so return true
  return true;
}
