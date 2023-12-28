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

function getBalanceIndex(arr) {
  // let isBalanced = false;
  let result = -1;

  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSideSum = 0;
    let rightSideSum = 0;
    // console.log(i)
    for (let j = 0; j < arr.length; j += 1) {
      if (j < i) {
        leftSideSum += arr[j];
        // console.log(leftSideSum);
      }

      if (arr.length - (j + 1) > i) {
        rightSideSum += arr[arr.length - (j + 1)];
        // console.log(rightSideSum);
      }
    }

    // console.log(leftSideSum);
    // console.log(rightSideSum);
    if (leftSideSum === rightSideSum) {
      result = i;
      break;
    }
  }

  return result;
}

// console.log(getBalanceIndex([0, 0, 0, 0, 0, 0, 0, 0, 55, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getBalanceIndex([]))

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
