const reverseArray = (arr) => {
  const resultArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    resultArr.push(arr[i]);
  }
  return resultArr;
}

const reverseArrayInPlace = (arr) => {
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++){
    let temp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
