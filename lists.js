const arrayToList = (arr, index = 0) => {
  if (index > arr.length - 1) return;
  return {
    value: arr[index],
    rest: arrayToList(arr, index += 1) || null
  }
}

const result = arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(JSON.stringify(result, null, 4));

// const list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }
