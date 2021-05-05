function getFreqOfDigits(num) {
  const freqOfDigits = {};
  while (num > 0) {
    const digit = num % 10;
    freqOfDigits[digit] = (freqOfDigits[digit] + 1) || 1;
    num = Math.floor(num / 10);
  }
  return freqOfDigits;
}

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  // create 2 freq obj of digits for each num
  const freqNum1 = getFreqOfDigits(num1);
  const freqNum2 = getFreqOfDigits(num2);

  // for each unique digit in 1st freq obj
  for (let digit in freqNum1) {
    // if not in 2nd freq obj, return false
    if (!freqNum2[digit]) {
      return false;  
    }
    // if val from 1st freq obj !== val from 2nd freq obj, return false
    if (freqNum1[digit] !== freqNum2[digit]) {
      return false;
    }
  }

  // all digits matched in frequency, so return true
  return true;
}
