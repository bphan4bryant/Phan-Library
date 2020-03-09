// File Name: split.js
//
// This shows how to convert a string to an array.
//
// string.split(separator, limit)
//  - separator: The separator between each element in the array.
//  - limit: {optional} The max number of splits
//
// Author: Bryant Phan

let str3 = 'To be or not to be'
let arr7 = str3.split('o')
console.log(arr7)

// Here is a shortcut for split()
let arr8 = [...str3]
console.log(arr8)