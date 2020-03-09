//File Name: buy2get1free.js
//
// Calculates the sale price with discount.
//
// Author: Bryant Phan

var readlineSync = require('readline-sync')

var costList = [], cost

for (i = 0; i < 3; i++) { 
    cost = parseFloat(readlineSync.question('Enter cost of the items(up to 3): '))
    costList.push(cost)
  }
costList.sort()
console.log('The discounted cost is: $' + (costList[1] + costList[2]).toFixed(2))
