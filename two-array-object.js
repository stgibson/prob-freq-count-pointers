// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const newObj = {};
  // for each item in arr1
  for (let i = 0; i < arr1.length; i++) {
    // if no corresp item in arr2, add item to obj with val null
    if (i >= arr2.length) {
      newObj[arr1[i]] = null;
    }
    // else add item to obj with corresp item in arr2 as val
    else {
      newObj[arr1[i]] = arr2[i];
    }
  }

  // return new obj
  return newObj;
}
