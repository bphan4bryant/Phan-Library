// File Name: constants.js
//
// This goes off of the const keyword.
//
// Author: Bryant Phan 

const phi = (1 + Math.sqrt(5)) / 2
let width, height, beautiful

// A credit card.
width = 87 //in mm
height = 54 //in mm
console.log('Ratio of a credit card ' + width/height)
beautiful = Math.abs(width/height - phi) < 0.02
console.log('Is a credit card beautiful? [' + beautiful + ']')

// A cell phone.
width = 141 //in mm
height = 70 //in mm
console.log('Ratio of a cell phone ' + width/height)
beautiful = Math.abs(width/height - phi) < 0.02
console.log('Is a cell phone beautiful? [' + beautiful + ']')