const findNumber = function(numberToFind){
  const find = function(start, history){
    if (start === numberToFind){
      return "Found! " + history
    } else if (start > numberToFind){
      return null;
    } else {
      return find((start + 5), "(" + history + " + 5)") ||
      find((start * 3), "(" + history + " * 3)")
    }
  }

  return find(1, 1);
}

console.log(findNumber(18));
