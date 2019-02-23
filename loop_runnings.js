const loops = (first, second, third) => {
  let firstLoop, secondLoop, thirdLoop;
  firstLoop = secondLoop = thirdLoop = 0;

  for (let i = 0; i < first; i++){
    firstLoop ++;
    for (let i = 0; i < second; i++){
      secondLoop++;
      for (let i = 0; i < third; i++)
        thirdLoop++;
    }
  }

  console.log('firstLoop', firstLoop);
  console.log('secondLoop', secondLoop);
  console.log('thirdLoop', thirdLoop);
}

// firstLoop * secondLoop * thirdLoop

loops(1, 2, 3);
// loops(2, 4, 8);
// loops(4, 8, 16);
// loops(16, 8, 4);
// loops(64, 32, 16);
