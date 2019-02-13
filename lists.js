const prepend = (element, list) => {
  return { value: element, rest: list };
}

const arrayToList = (arr, index = 0) => {
  if (index > arr.length - 1) return;

  return {
    value: arr[index],
    rest: arrayToList(arr, index += 1) || null
  }
}

const listToArray = (list, arr = []) => {
  arr.push(list.value);

  if (!list.rest) return arr;

  return listToArray(list.rest, arr);
}

const nth = (list, number) => {
  if (!list) return undefined;
  if (number === 1) return list.value;

  return nth(list.rest, number - 1);
}

// logs

const list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

console.log("List to Array:", listToArray(list));
console.log("Array to List: ", JSON.stringify(arrayToList([1, 2, 3]), null, 4));
console.log("Prepend", JSON.stringify(prepend(0, list), null, 4));
console.log("Nth", nth(list, 3));
console.log("Nth", nth(list, 4));
