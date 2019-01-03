
// function AlphabetSoup (str) {
//   var arr = str.split('');
//   var sorted = arr.sort();
//   return sorted.join('');
// }

// let word = 'coderbyte';

// let sortWord = AlphabetSoup(word);

// console.log(sortWord);

// function correctPath (str) {
//   let arrInput = Array.from(str);

//   // var matrix = [ [], [], [], [], [] ];

//   // for (var i = 0; i < 5; ++i) {
//   //   var columns = [];
//   //   for (var j = 0; j < 5; ++j) {
//   //     columns[j] = initial;
//   //   }
//   //   arr[i] = columns;
//   // }

//   // let path = [[1,2,3,4,5],
//   //             [6,,7,8,9,10],
//   //             [11,12,13,14,15],
//   //             [16,17,18,19,20],
//   //             [21,22,23,24,25]
//   // ]

// }

// function CorrectPath (str) {
//   // create an array to hold the positions of the question marks
//   let blankArray = [];
//   // put the position of the question marks into the array
//   str.split('').forEach((val, ind) => {
//     if (val === '?') {
//       blankArray.push(ind);
//     }
//   });

//   let num = blankArray.length;

//   // we are going to try each possibility until we find one that works,  This will be 4^num permutations
//   let total = Math.pow(4, num);

//   for (let i = 0; i < total; i++) {
//     // go through each permutation, first creating a representative number, then making the path, then testing it
//     let numString = (i + total).toString(4).slice(1);
//     let currentPath = createPath(str, blankArray, numString);
//     if (isPathGood(currentPath)) {
//       return currentPath;
//     }
//   }
// }

let input = 'drdr??rrddd?';

CorrectPath(input);
