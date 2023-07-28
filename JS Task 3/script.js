// Find next greatest letter among given letters after target letter Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// let letters = ['s', 'z', 'k']; // k, s, z
// let target = 'a';
// // result: 'k'

// let letters2 = ['s', 'z', 'k', 'a']; // a, k, s, z
// let target2 = 'k';
// // result: 's'

// let letters3 = ['a', 'c', 'e']; // a, B c, e
// let target3 = 'b';
// // result: 'c'

// let letters4 = ['a', 'b', 'c'];
// let target4 = 'x';
// // result: 'a'

// let targetCode = target3.charCodeAt(0);
// let min = Infinity;
// for (let char of letters3) {
// 	let charCode = char.charCodeAt(0);
// 	let diff = charCode - targetCode;

// 	if (diff > 0 && diff < min) {
// 		min = diff;
// 	}
// }

// if (min === Infinity) {
//     var result = letters3[0];
// } else {
//     var result = String.fromCharCode(targetCode + min);
// }

// console.log(result);


// Find out if the object is empty or not


// function objEmpty(obj) {
//     if (Object.keys(obj).length === 0) {
//         return 'object is empty';
//     } else {
//         return 'object is not empty';
//     }
// }

// let obj1 = {};
// console.log(objEmpty(obj1));

// let obj2 = {
//     key: 'value',
// };
// console.log(objEmpty(obj2));


// Clean nullish values from object

// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };
// // result: {
// //   key2: 0,
// //   key3: 'string'
// // }
// //

// for (let key in obj) {
//     if (obj[key] === null || obj[key] === undefined) {
//         delete obj[key];
//     }
// };

// console.log(obj);
  


// Clean falsy values from object

// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };
// // result: {
// //   key3: 'string'
// // }
// //

// for (let key in obj) {
//     if (obj[key] === 0 || obj[key] === false || obj[key] === null || obj[key] === undefined || obj[key] === NaN || obj[key] === '') {
//         delete obj[key];
//     }
// };

// console.log(obj);











