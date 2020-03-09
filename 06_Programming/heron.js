// File Name: heron.js
//
// This reads in the 3 sides of a triangle and finds its area.
//
// Author: Bryant Phan

let readline = require('readline-sync')

const heron = (side1, side2, side3) => {
    const s = (side1 + side2 + side3) / 2
    return Math.sqrt(s * (s-side1) * (s-side2) * (s-side3))
}

let a,b,c
console.log('Finding the area of a triangle:')
a = parseFloat(readline.question('  Enter the 1st side: '))
b = parseFloat(readline.question('  Enter the 2st side: '))
c = parseFloat(readline.question('  Enter the 3st side: '))

console.log('The area of the triangle is ' + heron(a, b, c))