const ar1 = [1, 5, 10, 20, 40, 80];
const ar2 = [6, 7, 20, 80, 100];
const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];

const findCommon = (arr1, arr2, arr3) => {
  let common = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }

  return common;
};

console.log(findCommon(ar1, ar2, ar3));
