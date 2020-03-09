// File Name: app.js
//
// This program finds info about a line
//
// Author: Mr. Dagler

const readline = require('readline-sync')
const lineCalc = require('./lineCalc.js')

let flag, A, B, C, m

console.log('Finding all you need to know about a line. Enter:')
console.log('   1: If you line is in Standard From')
console.log('   2: If you line is in Slope Intercept Form')
flag = readline.question(' ')

if(flag === '1') {
    console.log('I see that your line is in Standard Form [Ax+By=C]')
    A = parseInt(readline.question('  Enter the value for A:'))
    B = parseInt(readline.question('  Enter the value for B:'))
    C = parseInt(readline.question('  Enter the value for C:'))

    console.log('\nhere is some info about your line:')
    console.log('   Its slope = ' + lineCalc.standSlope(A, B, C))
    console.log('   Its x-int = ' + lineCalc.standXint(A, B, C))
    console.log('   Its y-int = ' + lineCalc.standYint(A, B, C))
} else if(flag === '2') {
    console.log('I see that your line is in Slope Intercept Form [y=mx+b]')
    m = parseInt(readline.question('  Enter the value for m:'))
    b = parseInt(readline.question('  Enter the value for b:'))

    console.log('\nhere is some info about your line:')
    console.log('   Its slope = ' + lineCalc.slopeIntSlope(m, b))
    console.log('   Its x-int = ' + lineCalc.slopeIntXint(m, b))
    console.log('   Its y-int = ' + lineCalc.slopeIntYint(m, b))
} else {
    console.log('Invalid Input fam.')
}