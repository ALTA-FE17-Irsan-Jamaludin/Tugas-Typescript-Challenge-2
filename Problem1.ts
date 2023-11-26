const pairSum = (arr: number[], target: number): number[] => {
  let resultArr: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        const left: number = arr.indexOf(arr[i]);
        const right: number = arr.indexOf(arr[j]);
        resultArr.push(left, right);
      }
    }
  }
  return resultArr;
};

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11)); // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12)); // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10)); // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6)); // [0, 1]
