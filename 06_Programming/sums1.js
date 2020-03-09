// File Name: sums1.js
//
// This reads in the value of n and finds:
//
//   3*1 + 3*2 + ... + 3*n
//
// Author: Bryant Phan

let readline = require('readline-sync')

let n, ans = '', sum = 0
n = parseInt(readline.question('Enter a value: '))

for(let i=1; i<=n; i++) {
    ans += '(3*' + i + ')'
    if(i!=n) {
        ans += '+'
    }
    sum += 3*i
}

console.log(ans + '=' + sum)

