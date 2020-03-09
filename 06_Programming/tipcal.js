// File Name: tipcal.js
//
// This finds the amount to tip based on cost of the bill and quality of the service. It then outputs the tip and total cost.
//
// Author: Bryant Phan

var readlineSync = require('readline-sync')

var quality, initCost, totalCost

quality = parseInt(readlineSync.question('Enter service quality on scale 1-10: '))
initCost = parseInt(readlineSync.question('Enter initial cost of bill: '))

if (quality <= 3) {
    totalCost = initCost * 1.10
}
else if (quality >= 4 && quality <= 7) {
    totalCost = initCost * 1.15
}
else if (quality >= 8) {
    totalCost = initCost * 1.20
}
console.log('The total cost will be: $' + totalCost)