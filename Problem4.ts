const chooseBigger = (arr: number[], target: number) => {
  let copyArr: number[] = [...arr];
  let maxNumArr = 0;
  for (let i = 0; i < copyArr.length - target; i++) {
    let jumlahkan = 0;
    for (let j = 0; j < target; j++) {
      jumlahkan += copyArr[j + i];
      maxNumArr = Math.max(jumlahkan, maxNumArr);
    }
  }
  return maxNumArr;
};

console.log(chooseBigger([2, 3, 4, 1, 5], 2)); // Output: 7
console.log(chooseBigger([2, 1, 4, 1, 1], 2)); // Output: 5
console.log(chooseBigger([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(chooseBigger([2, 1, 4, 1, 1], 3)); // Output: 7
console.log(chooseBigger([2, 1, 4, 1, 1], 4)); // Output: 8
