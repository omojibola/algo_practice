// find common value betwen two arrays

let first = [1, 2, 2, 4, 5, 1, 2];
let second = [5, 4, 2, 8, 9, 9, 1];

const findCommonValue = (arr1, arr2) => {
  let common = [];
  for (let arr of arr2) {
    if (arr1.includes(arr)) {
      common.push(arr);
    }
  }
  return common;
};

console.log(findCommonValue(first, second));
