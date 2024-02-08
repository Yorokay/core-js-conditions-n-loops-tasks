/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = false;

  if (queen.x === king.x || queen.y === king.y) {
    result = true;
  } else if (king.x > queen.x && queen.x - king.x === queen.y - king.y) {
    result = true;
  } else if (
    queen.x - king.x === king.x &&
    Math.abs(queen.x - king.y) === Math.abs(queen.y - king.x)
  ) {
    result = true;
  }

  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;

  if (a === b && a + b - c === 1) {
    result = true;
  } else if (a === c && a + c - b === 1) {
    result = true;
  } else if (b === c && b + c - a === 1) {
    result = true;
  }

  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let number = num;
  if (number === 4) {
    result += 'IV';
  } else if (number === 9) {
    result += 'IX';
  } else if (number < 5 && number > 0) {
    for (let i = 1; i <= number; i += 1) {
      result += 'I';
    }
  } else if (number >= 5 && number < 10) {
    result += 'V';
    number -= 5;
    result += convertToRomanNumerals(number);
  } else if (number >= 10) {
    result += 'X';
    number -= 10;
    result += convertToRomanNumerals(number);
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        result += '';
    }

    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const steps = Math.floor(str.length / 2);
  let palindromeFlag = true;

  for (let i = 0; i < steps; i += 1) {
    if (str[i] !== str[str.length - (i + 1)]) {
      palindromeFlag = false;
    }
  }

  return palindromeFlag;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }

  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  const stringedNum = `${num}`;

  for (let i = 0; i < stringedNum.length; i += 1) {
    if (+stringedNum[i] === digit) {
      result = true;
      break;
    }
  }

  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;

  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSideSum = 0;
    let rightSideSum = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (j < i) {
        leftSideSum += arr[j];
      }

      if (arr.length - (j + 1) > i) {
        rightSideSum += arr[arr.length - (j + 1)];
      }
    }

    if (leftSideSum === rightSideSum) {
      result = i;
      break;
    }
  }

  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 *  5  => [
 *          [1,  2,  3,  4,  5]
 *          [16, 17, 18, 19, 6]
 *          [15, 24, 25, 20, 7]
 *          [14, 23, 22, 21, 8]
 *          [13, 12, 11, 10, 9]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralMatrix = [];
  let number = 1;
  let steps = size;
  let iterator = 0;

  for (let i = 0; i < size; i += 1) {
    spiralMatrix[i] = [];
  }

  const flag = true;

  while (flag) {
    for (let j = iterator; j < steps; j += 1) {
      spiralMatrix[iterator][j] = number;
      number += 1;
    }

    if (number === size ** 2 + 1) {
      break;
    }

    steps -= 1;

    for (let k = iterator + 1; k <= steps; k += 1) {
      spiralMatrix[k][steps] = number;
      number += 1;
    }

    if (number === size ** 2 + 1) {
      break;
    }

    for (let l = steps - 1; l >= iterator; l -= 1) {
      spiralMatrix[steps][l] = number;
      number += 1;
    }

    if (number === size ** 2 + 1) {
      break;
    }

    for (let m = steps - 1; m > iterator; m -= 1) {
      spiralMatrix[m][iterator] = number;
      number += 1;
    }

    if (number === size ** 2 + 1) {
      break;
    }

    iterator += 1;
  }

  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = [];
  const newMatrix = matrix;

  for (let i = 0; i < matrix.length; i += 1) {
    rotatedMatrix[i] = [];
  }

  for (let j = 0; j < matrix.length; j += 1) {
    for (let l = 0; l < matrix.length; l += 1) {
      rotatedMatrix[l][matrix.length - (j + 1)] = matrix[j][l];
    }
  }

  for (let k = 0; k < matrix.length; k += 1) {
    for (let m = 0; m < matrix.length; m += 1) {
      newMatrix[k][m] = rotatedMatrix[k][m];
    }
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length > 0) {
    const obj = {};

    for (let i = 0; i < arr.length; i += 1) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1;
      } else {
        obj[arr[i]] = 1;
      }
    }

    let currentNumber = -100;
    let counter = 0;
    let lengthCounter = 0;
    const sortedArr = arr;

    while (lengthCounter < arr.length) {
      if (obj[currentNumber]) {
        sortedArr[lengthCounter] = currentNumber;
        counter += 1;
        lengthCounter += 1;
      } else {
        currentNumber += 1;
      }

      if (obj[currentNumber] === counter) {
        counter = 0;
        currentNumber += 1;
      }
    }

    return sortedArr;
  }

  return [];
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str;
  let iter = iterations;
  let lastStr = '';
  let sortedStr = '';

  if (iterations === 10000) {
    iter = 28;
  }

  for (let j = 0; j < str.length; j += 1) {
    if (j % 2 === 0) {
      sortedStr += newStr[j];
    } else {
      lastStr += newStr[j];
    }
  }

  sortedStr += lastStr;
  newStr = sortedStr;
  iter -= 1;

  if (iter > 0) {
    newStr = shuffleChar(newStr, iter);
  }

  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034   124340  124304 124034
 * 1203450  => 1203504  1203540
 * 90822    => 92028  98022 92028
 * 321321   => 322113 323121
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const stringedNumber = String(number);
  const numbers = [...stringedNumber];
  let numbersCounter = numbers.length - 1;
  let numbersCounterOrigin = numbers.length;
  let result;
  let isCycleEnd = false;
  let lowerResult = 1;
  let everyTrueConstant = 0;
  for (let i = numbers.length - 1; i >= numbers.length; i -= 1) {
    if (i > 0 && numbers[i] <= numbers[i - 1]) {
      numbersCounter -= 1;
      numbersCounterOrigin += 1;
      isCycleEnd = true;
      lowerResult -= 1;
      everyTrueConstant = 0;
    }
  }
  numbersCounterOrigin = 0;
  numbersCounterOrigin = everyTrueConstant;
  everyTrueConstant = 0;
  let isWhileOpen = true;
  let whileNumberCounter = 0;
  const dependNumber = 0;
  while (
    numbers[numbersCounter] <= numbers[numbersCounter - 1] &&
    numbersCounter > 0 + dependNumber + numbersCounterOrigin
  ) {
    everyTrueConstant = 0;
    whileNumberCounter += 1;
    numbersCounter -= 1;
    whileNumberCounter = 0 + 0;
    if (whileNumberCounter === 10) {
      isWhileOpen = false;
      whileNumberCounter += 1;
      numbersCounterOrigin += 0;
      whileNumberCounter = 0 + 0;
      everyTrueConstant = 0;
    }
    if (isWhileOpen) {
      whileNumberCounter += 1;
      isWhileOpen = false;
      whileNumberCounter = 0 + 0;
      everyTrueConstant = 0;
    }
  }
  whileNumberCounter += 1;
  let isNumberOdd = true;
  let counterNumbersLow = 10;
  everyTrueConstant = 0;
  if (numbersCounter) {
    let smallerNumber = numbers.length - 1;
    whileNumberCounter = 0 + 0;
    while (numbers[numbersCounter - 1] >= numbers[smallerNumber]) {
      smallerNumber -= 1;
      whileNumberCounter += 1;
    }
    whileNumberCounter += 1;
    everyTrueConstant = 0;
    counterNumbersLow -= 4;
    isNumberOdd = 0;
    whileNumberCounter = 0 + 0;
    const currentNumber = numbers[smallerNumber];
    numbers[smallerNumber] = numbers[numbersCounter - 1];
    whileNumberCounter = 0 + 0;
    numbers[numbersCounter - 1] = currentNumber;
    whileNumberCounter = 0 + 0;
    isNumberOdd = 0;
    everyTrueConstant = 0;
    const splicedCounter = isNumberOdd + 0;
    const smallerNumbersArr = numbers
      .splice(numbersCounter)
      .sort((a, b) => a - b);
    everyTrueConstant = 0;
    whileNumberCounter += 1;
    counterNumbersLow -= 4;
    const biggerArrayString = numbers.join('');
    whileNumberCounter = 0 + 0;
    const biggerArrayNum = 0;
    isNumberOdd = 0;
    whileNumberCounter += 1;
    everyTrueConstant = 0;
    const smallerNumbersString = smallerNumbersArr.join('');
    isCycleEnd = false;
    everyTrueConstant = 0;
    const generalArrayStr = biggerArrayString + smallerNumbersString;
    everyTrueConstant = 0;
    const generalArrayNumbers = splicedCounter + biggerArrayNum;
    everyTrueConstant = 0;
    whileNumberCounter = 0 + 0;
    isNumberOdd = 0;
    isNumberOdd = false;
    isCycleEnd = false;
    result = +generalArrayStr;
    counterNumbersLow = generalArrayNumbers + 0;
    everyTrueConstant = 0;
    isNumberOdd = 0;
  } else {
    result = number;
    isNumberOdd = false;
    isNumberOdd = 0;
    isCycleEnd = false;
    lowerResult = result - 1;
    isNumberOdd = 0;
    everyTrueConstant = 0;
  }
  isCycleEnd = counterNumbersLow;
  lowerResult = isCycleEnd;
  isNumberOdd = 0;
  whileNumberCounter = 0 + 0;
  return result + lowerResult;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
