// function canQueenCaptureKing(queen, king) {
//   let result = false;

//   if (queen.x === king.x || queen.y === king.y) {
//     result = true;
//   } else if (king.x > queen.x && queen.x - king.x === queen.y - king.y) {
//     result = true;
//   } else if (
//     queen.x - king.x === king.x &&
//     Math.abs(queen.x - king.y) === Math.abs(queen.y - king.x)
//   ) {
//     result = true;
//   }

//   return result;
// }

// console.log(canQueenCaptureKing({ x: 3, y: 5 }, { x: 8, y: 4 }))

// function getBalanceIndex(arr) {
<<<<<<< HEAD
// // let isBalanced = false;
// let result = -1;
// for (let i = 1; i < arr.length - 1; i += 1) {
//   let leftSideSum = 0;
//   let rightSideSum = 0;
//   // console.log(i)
//   for (let j = 0; j < arr.length; j += 1) {
//     if (j < i) {
//       leftSideSum += arr[j];
//       // console.log(leftSideSum);
//     }
//     if (arr.length - (j + 1) > i) {
//       rightSideSum += arr[arr.length - (j + 1)];
//       // console.log(rightSideSum);
//     }
//   }
//   // console.log(leftSideSum);
//   // console.log(rightSideSum);
//   if (leftSideSum === rightSideSum) {
//     result = i;
//     break;
//   }
// }
// return result;
=======
  // // let isBalanced = false;
  // let result = -1;

  // for (let i = 1; i < arr.length - 1; i += 1) {
  //   let leftSideSum = 0;
  //   let rightSideSum = 0;
  //   // console.log(i)
  //   for (let j = 0; j < arr.length; j += 1) {
  //     if (j < i) {
  //       leftSideSum += arr[j];
  //       // console.log(leftSideSum);
  //     }

  //     if (arr.length - (j + 1) > i) {
  //       rightSideSum += arr[arr.length - (j + 1)];
  //       // console.log(rightSideSum);
  //     }
  //   }

  //   // console.log(leftSideSum);
  //   // console.log(rightSideSum);
  //   if (leftSideSum === rightSideSum) {
  //     result = i;
  //     break;
  //   }
  // }

  // return result;
>>>>>>> 1c896eec05ca9ba13061aeda495dc00d2cd96a34
// }

// console.log(getBalanceIndex([0, 0, 0, 0, 0, 0, 0, 0, 55, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(getBalanceIndex([]))

// const length = 9;
//       for (let i = 0; i < 5; i += 1) {
//         const balanced = utility.getBalancedArrayUtil(length * (i + 1));
//         console.log()
//         assert.equal(
//           tasks.getBalanceIndex(balanced.arr),
//           balanced.balanceIndex
//         );
//       }

// console.log()

<<<<<<< HEAD
// function getSpiralMatrix(size) {
// let spiralMatrix = [];
// let number = 1;
// let steps = size;
// let iterator = 0;
// for (let i = 0; i < size; i += 1) {
//   spiralMatrix[i] = [];
// }
// while (true) {
//   for (let j = iterator; j < steps; j += 1) {
//     spiralMatrix[iterator][j] = number;
//     number++;
//   }
//   if (number === size ** 2 + 1) {
//     break;
//   }
//   steps -= 1;
//   for (let k = iterator + 1; k <= steps; k += 1) {
//     spiralMatrix[k][steps] = number;
//     number++;
//   }
//   if (number === size ** 2 + 1) {
//     break;
//   }
//   for (let l = steps - 1; l >= iterator; l -= 1) {
//     spiralMatrix[steps][l] = number;
//     number++;
//   }
//   if (number === size ** 2 + 1) {
//     break;
//   }
//   for (let m = steps - 1; m > iterator; m -= 1) {
//     spiralMatrix[m][iterator] = number;
//     number++;
//   }
//   if (number === size ** 2 + 1) {
//     break;
//   }
//   iterator++;
// }
// return spiralMatrix;
=======


// function getSpiralMatrix(size) {
  // let spiralMatrix = [];
  // let number = 1;
  // let steps = size;
  // let iterator = 0;

  // for (let i = 0; i < size; i += 1) {
  //   spiralMatrix[i] = [];
  // }

  // while (true) {

  //   for (let j = iterator; j < steps; j += 1) {
  //     spiralMatrix[iterator][j] = number;
  //     number++;
  //   }

  //   if (number === size ** 2 + 1) {
  //     break;
  //   }

  //   steps -= 1;

  //   for (let k = iterator + 1; k <= steps; k += 1) {
  //     spiralMatrix[k][steps] = number;
  //     number++;
  //   }

  //   if (number === size ** 2 + 1) {
  //     break;
  //   }

  //   for (let l = steps - 1; l >= iterator; l -= 1) {
  //     spiralMatrix[steps][l] = number;
  //     number++;
  //   }

  //   if (number === size ** 2 + 1) {
  //     break;
  //   }

  //   for (let m = steps - 1; m > iterator; m -= 1) {
  //     spiralMatrix[m][iterator] = number;
  //     number++;
  //   }

  //   if (number === size ** 2 + 1) {
  //     break;
  //   }

  //   iterator++;
  // }

  // return spiralMatrix;
>>>>>>> 1c896eec05ca9ba13061aeda495dc00d2cd96a34
// }

// console.log(getSpiralMatrix(5));

// function rotateMatrix(matrix) {
//   const rotatedMatrix = [];
//   const newMatrix = matrix;
//   console.log(newMatrix === matrix);
//   for (let i = 0; i < matrix.length; i += 1) {
//     rotatedMatrix[i] = [];
//   }

//   for (let j = 0; j < matrix.length; j += 1) {
//     for (let l = 0; l < matrix.length; l += 1) {
//       rotatedMatrix[l][matrix.length - (j + 1)] = matrix[j][l];
//     }
//   }

//   for (let k = 0; k < matrix.length; k += 1) {
//     for (let m = 0; m < matrix.length; m += 1) {
//       newMatrix[k][m] = rotatedMatrix[k][m];
//     }
//   }

//   console.log(newMatrix);
//   console.log(newMatrix === matrix);
//   // return rotatedMatrix;
// }

// console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// function sortByAsc(arr) {

//   for (let i = 0; i < arr.length - 1; i += 1) {
//     let min = arr[i];
//     for (let j = i + 1; j < arr.length; j += 1) {

//       if (arr[j] < min) {
//         let current = arr[j];
//         arr[j] = min;
//         min = current;
//         arr[i] = current;
//       }
//     }
//   }

//   return arr;
// }

// console.log(sortByAsc([1, 10, 14, 3, 4, 8, 39, 14, 39]))

// function shuffleChar(str, iterations) {
//   let newStr = str;
//   let iter = iterations;

//   function getNewString(str) {
//     let lastStr = '';
//     let sortedStr = '';
//     for (let j = 0; j < str.length; j += 1) {
//       if (j % 2 === 0) {
//         sortedStr += newStr[j];
//       } else {
//         lastStr += newStr[j];
//       }
//     }

//     sortedStr += lastStr;
//     newStr = sortedStr;

//     return newStr;
//   }

//   while (iter > 0) {
//     newStr = getNewString(newStr);

//     if (newStr === str) {
//       console.log(iter)
//     }

//     iter -= 1;

//   }

//   return newStr;
// }

// let lol = '4719735901734957137597193579175971035701735071390570183508103850917598719035790147590479587189651657023864082607107569018460972679027460720967209670297860927390672067029767057197501785907810671967091764078140965724980760196740274607230967037609234851850175167508490678957893458305645720458201387415619658157071935867819374891735890713471893749087138947912748916589137589175936715969816739857189375901673985719837598316598739487139745913749137958671938759813759619357691837597139571932759167235612983578975971983759165971928759185618957397591685981723987459835619357917250712095712907395791237598275982735926589723957920375016590137295721957197235973129857265982173597501275091723590719057019857918275981720597109759175961925719275916759182735073895712975917539875917395715937793479130274917347132948712390479813567836598163289583578978947192374091237409172394712398658913275917329057123095790123749732916591379847927439274897132590719203659213675987213905789157291659174598715979327409147908732491723';

// let kek = '4719735901734957137597193579175971035701735071390570183508103850917598719035790147590479587189651657';

// // console.log(kek.length)
// // shuffleChar(lol, 10000)

// console.log(shuffleChar(lol, 28))
// let check = shuffleChar(lol, 28);
// console.log(shuffleChar(lol, 10000) === check)
// console.log(shuffleChar(lol, 600))
// console.log(shuffleChar(kek, 60) === kek)

// for (let i = 1; i <= 1000) {
//   if (shuffleChar(lol, 10000))
// }

// console.log(getShuffleStringUtil('012345', 3))

// function getShuffleStringUtil(str, iteration) {
//   return eval(
//     function (p, a, c, k, e, r) {
//       e = function (c) { return c.toString(a) };
//       if (!''.replace(/^/, String)) {
//         while (c--)
//           r[e(c)] = k[c] || e(c);
//         k = [function (e) { return r[e] }];
//         e = function () { return '\\w+' };
//         c = 1
//       };
//       while (c--)
//         if (k[c])
//           p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
//       return p
//     }
//     ('(6,9)=>{4 5=9;4 3=6;7 a=6;4 8=f;b(4 i=0;i<5;i+=1){b(4 j=1;j<3.g/2+1;j+=1){7 c=3[j];3=3.d(0,j)+3.d(j+1);3+=c}h(3===a&&!8){8=k;7 e=l.m(5/(i+1));5-=e*(i+1);i=-1}}n 3}', 24, 24, '|||source|let|counter|str|const|flagInputStringEquality|iteration|etalon|for|temp|substring|countMin|false|length|if|||true|Math|floor|return'.split('|'), 0, {}))(str, iteration);
// }

<<<<<<< HEAD
function getNearestBigger(number) {
  // const stringedNumber = `${number}`;
  // const numberArr = [];
  // for (let k = 0; k < stringedNumber.length; k += 1) {
  //   numberArr[k] = stringedNumber[k];
  // }

  // const originalNumber = Number(numberArr.join(''));
  // let iterator = 1;

  // while (true) {
  //   if (
  //     numberArr[numberArr.length - iterator] >
  //     numberArr[numberArr.length - (iterator + 1)]
  //   ) {
  //     const current = numberArr[numberArr.length - iterator];
  //     numberArr[numberArr.length - iterator] =
  //       numberArr[numberArr.length - (iterator + 1)];
  //     numberArr[numberArr.length - (iterator + 1)] = current;
  //     break;
  //   }

  //   iterator += 1;
  // }

  // iterator = 1;
  // let maxNumberId = numberArr.indexOf(`${Math.max.apply(null, numberArr)}`);
  // const startNumber = Number(numberArr.join(''));
  // let currentArr = numberArr;
  // const deletingArr = numberArr;

  // while (true) {
  //   if (maxNumberId > -1) {
  //     console.log(deletingArr[maxNumberId]);
  //   }
  //   const currentNumber = numberArr[numberArr.length - iterator];
  //   currentArr[numberArr.length - iterator] = currentArr[maxNumberId];
  //   currentArr[maxNumberId] = currentNumber;

  //   if (
  //     Number(currentArr.join('')) < startNumber &&
  //     Number(currentArr.join('')) > originalNumber
  //   ) {
  //     break;
  //   }

  //   currentArr = numberArr;
  //   deletingArr[maxNumberId] = null;
  //   maxNumberId = deletingArr.indexOf(`${Math.max.apply(null, deletingArr)}`);
  // }

  // return currentArr;

  const stringedNumber = String(number);
  const numbers = [...stringedNumber];
  return numbers;
}

// console.log(getNearestBigger(123450));
console.log(getNearestBigger(123450));

// const stringedNumber = String(number);
// const numbers = [...stringedNumber];
// let numbersCounter = numbers.length - 1;
// let result;
// for (let i = numbers.length - 1; i >= numbers.length; i -= 1) {
//   if (numbersCounter > 0 && numbers[i] <= numbers[i - 1]) {
//     numbersCounter -= 1;
//   }
// }
// if (numbersCounter) {
//   let smallerNumber = numbers.length - 1;
//   while (numbers[numbersCounter - 1] >= numbers[smallerNumber]) {
//     smallerNumber -= 1;
//   }
//   const currentNumber = numbers[smallerNumber];
//   numbers[smallerNumber] = numbers[numbersCounter - 1];
//   numbers[numbersCounter - 1] = currentNumber;
//   const smallerNumbersArr = numbers
//     .slice(numbersCounter)
//     .sort((a, b) => a - b);
// const biggerNumbersString = numbers.join('');
// const biggerNumbers = biggerNumbersString.split();
// const smallerNumbersString = smallerNumbersArr.join('');
// const generalNumbersString = biggerNumbersString + smallerNumbersString;
// const generalNumbersArr = biggerNumbers.concat(smallerNumbersArr);
// console.log(generalNumbersString, generalNumbersArr[0]);
// result = +generalNumbersArr[0];
// result = JSON.parse(`${numbers.join('')}${smallerNumbersArr.join('')}`);
// if (
//   generalNumbersString.split('').join('') === generalNumbersArr.join('')
// ) {
//   result = generalNumbersArr;
// }
// } else {
//   result = number;
// }
// return result;

console.log();

// const stringedNumber = String(number);
// const numbers = [...stringedNumber];
// let numbersCounter = numbers.length - 1;
// let result;
// for (let i = numbers.length - 1; i >= numbers.length; i -= 1) {
//   if (numbersCounter > 0 && numbers[i] <= numbers[i - 1]) {
//     numbersCounter -= 1;
//   }
// }
// while (
//   numbers[numbersCounter] <= numbers[numbersCounter - 1] &&
//   numbersCounter > 0
// ) {
//   numbersCounter -= 1;
// }
// if (numbersCounter) {
//   let smallerNumber = numbers.length - 1;
//   while (numbers[numbersCounter - 1] >= numbers[smallerNumber]) {
//     smallerNumber -= 1;
//   }
//   const currentNumber = numbers[smallerNumber];
//   numbers[smallerNumber] = numbers[numbersCounter - 1];
//   numbers[numbersCounter - 1] = currentNumber;
//   const smallerNumbersArr = numbers.splice(numbersCounter).sort();
//   result = JSON.parse(smallerNumbersArr);
// const biggerNumbersString = numbers.join('');
// const biggerNumbers = biggerNumbersString.split();
// const smallerNumbersString = smallerNumbersArr.join('');
// const generalNumbersString = biggerNumbersString + smallerNumbersString;
// const generalNumbersArr = biggerNumbers.concat(smallerNumbersArr);
// console.log(generalNumbersString, generalNumbersArr[0]);
// result = +generalNumbersArr[0];
// result = JSON.parse(`${numbers.join('')}${smallerNumbersArr.join('')}`);
// if (
//   generalNumbersString.split('').join('') === generalNumbersArr.join('')
// ) {
//   result = generalNumbersArr;
// }
// } else {
//   result = number;
// }
// return result;
=======

// function getNearestBigger(number) {
//   const stringedNumber = `${number}`;
//   let numberArr = [];
//   for (let k = 0; k < stringedNumber.length; k += 1) {
//     numberArr[k] = stringedNumber[k];
//   }

//   let originalNumber = Number(numberArr.join(''));
//   let iterator = 1;

//   while (true) {

//     if (numberArr[numberArr.length - iterator] > numberArr[numberArr.length - (iterator + 1)]) {
//       let current = numberArr[numberArr.length - iterator];
//       numberArr[numberArr.length - iterator] = numberArr[numberArr.length - (iterator + 1)];
//       numberArr[numberArr.length - (iterator + 1)] = current;
//       break;
//     }

//     iterator++;
//   }

//   iterator = 1;
//   let maxNumberId = numberArr.indexOf(`${Math.max.apply(null, numberArr)}`);
//   let startNumber = Number(numberArr.join(''));
//   let currentArr = numberArr;
//   let deletingArr = numberArr;

//   while (true) {
//     if (maxNumberId > -1) {
//       console.log(deletingArr[maxNumberId])
//     }
//     let currentNumber = numberArr[numberArr.length - iterator];
//     currentArr[numberArr.length - iterator] = currentArr[maxNumberId];
//     currentArr[maxNumberId] = currentNumber;

//     if (Number(currentArr.join('')) < startNumber && Number(currentArr.join('')) > originalNumber) {
//       break;
//     }

//     currentArr = numberArr;
//     deletingArr[maxNumberId] = null;
//     maxNumberId = deletingArr.indexOf(`${Math.max.apply(null, deletingArr)}`)
//   }

//   return currentArr;
// }

// // console.log(getNearestBigger(123450));
// console.log(getNearestBigger(123450))

// function sortByAsc(arr) {
  // const sortedArr = arr;
  // for (let i = 0; i < sortedArr.length - 1; i += 1) {
  //   let min = sortedArr[i];
  //   for (let j = i + 1; j < sortedArr.length; j += 1) {
  //     if (sortedArr[j] < min) {
  //       const current = sortedArr[j];
  //       sortedArr[j] = min;
  //       min = current;
  //       sortedArr[i] = current;
  //     }
  //   }
  // }

  // if (arr.length === 0) return [];
  // const smallArray = [];
  // const bigArray = [];
  // const comparableNumber = arr[0];

  // for (let i = 1; i < arr.length; i += 1) {
  //   if (arr[i] < comparableNumber) smallArray[smallArray.length] = arr[i];
  //   else bigArray[bigArray.length] = arr[i];
  // }
  // return [...sortByAsc(smallArray), comparableNumber, ...sortByAsc(bigArray)];

  // function sortByAsc(arr) {
  //   if (arr.length > 0) {
  //     let obj = {};

  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (obj[arr[i]]) {
  //         obj[arr[i]] += 1;
  //       } else {
  //         obj[arr[i]] = 1;
  //       }
  //     }

  //     let currentNumber = -100;
  //     let counter = 0;
  //     let lengthCounter = 0;
  //     let sortedArr = arr;

  //     while (lengthCounter < arr.length) {
  //       if (obj[currentNumber]) {
  //         sortedArr[lengthCounter] = currentNumber;
  //         counter += 1;
  //         lengthCounter += 1;
  //       } else {
  //         currentNumber += 1;
  //       }


  //       if (obj[currentNumber] === counter) {
  //         counter = 0;
  //         currentNumber += 1;
  //       }
  //     }


  //     return sortedArr;
  //   }

  //   return [];
    // else {
    //   if (arr.length === 0) return [];
    //   const smallArray = [];
    //   const bigArray = [];
    //   const comparableNumber = arr[0];

    //   for (let i = 1; i < arr.length; i += 1) {
    //     if (arr[i] < comparableNumber) smallArray[smallArray.length] = arr[i];
    //     else bigArray[bigArray.length] = arr[i];
    //   }
    //   return [...sortByAsc(smallArray), comparableNumber, ...sortByAsc(bigArray)];
    // }
  // }



  // function getRandomNumberUtil(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // function getRandomArrayUtil(min, max, count) {
  //     const arr = [];
  //     for (let i = 0; i < count; i += 1) {
  //       arr.push(getRandomNumberUtil(min, max));
  //     }
  //     return arr;
  // }

  // const min = -100;
  // const max = 100;
  // const length = 7500;
  // const arr = getRandomArrayUtil(min, max, length);

  // console.log(sortByAsc([2, 9, 5, 9] ))
>>>>>>> 1c896eec05ca9ba13061aeda495dc00d2cd96a34
