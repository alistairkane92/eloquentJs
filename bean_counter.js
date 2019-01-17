const countBs = function(string){
  let count = 0;
  for (let i = 0; i < string.length; i++){
    if (string.charAt(i) == 'B'){
      count ++;
    }
  }
  return count;
}

console.log(countBs('Big Baldy Barry B'));
console.log(countBs('Benjamin had a Boat party'));
console.log(countBs('BBBB bbbb'));

const countChar = function(string, letterToFind){
  let count = 0;
  for (x in string){
    if (string.charAt(x) === letterToFind){
      count ++;
    }
  }
  return count;
}

console.log(countChar('Big Baldy Barry B', 'B'));
console.log(countChar('Michael misses his Missus', 'M'));
console.log(countChar('Fancy French Fancies', 'f'));
