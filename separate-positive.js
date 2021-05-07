function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// add whatever parameters you deem necessary
function separatePositive(arr) {
  // create a pointer at start of arr
  let i = 0;

  // for each num in arr
  for (let j = 0; j < arr.length; j++) {
    // if positive
    if (arr[j] > 0) {
      // swap with num pointed by pointer & increment pointer
      swap(arr, i, j);
      i++;
    }
  }

  // return arr
  return arr;
}
