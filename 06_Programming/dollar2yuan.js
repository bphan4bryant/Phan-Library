// File Name: dollar2yuan.js
//
// This converts a US Dollar to a Chinese Yuan.
//
// Author: Bryant Phan

let readline = require('readline-sync')

const dollar2yuan = function(dollar) {
    return 7.02 * dollar
}

let dollarAmount, yuanAmount
console.log('Conversion from US Dollar to Chinese Yuan.')
dollarAmount = parseFloat(readline.question('  Enter the dollar amount: '))

yuanAmount = dollar2yuan(dollarAmount)
console.log('$' + dollarAmount + ' = ' + '¥' + yuanAmount.toFixed(2))
