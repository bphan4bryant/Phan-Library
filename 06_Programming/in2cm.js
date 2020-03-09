// File Name: in2cm.js
//
// This converts inches to centimeters.
//
// Author: Bryant Phan

let readline = require('readline-sync')

const in2cm = function(inches){
    return inches * 2.54
}

let inches = parseFloat(readline.question('How many inches? '))
console.log(inches.toFixed(2) + 'in = ' + in2cm(inches).toFixed(2) + 'cm')