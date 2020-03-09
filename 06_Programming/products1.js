/* File Name: products1.js
*
* This reads in a value for n and then finds:
*
*   10/1 * 10/2 * 10/3 * ... * 10/n
*
* Author: Bryant Phan
*/

let readline = require('readline-sync')

let n, ans = '', product = 1.0
n = parseInt(readline.question('Enter a value: '))

for(let i=1; i<=n; i++) {
    ans += '(10/' + i + ')'
    product *= 10/i
}

console.log(ans + ' = ' + product)