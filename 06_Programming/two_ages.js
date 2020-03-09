// File Name: two_ages.js
//
// This reads in two people's names and ages and outputs the sum of their ages.
//
// Author: Bryant Phan

var readlineSync = require('readline-sync')
 
var name1, age1, name2, age2

// Wait for user's response.
name1 = readlineSync.question('Enter 1st person\'s name: ')
age1 = parseInt(readlineSync.question('Enter 1st person\'s age: '))
name2 = readlineSync.question('Enter 2nd person\'s name: ')
age2 = parseInt(readlineSync.question('Enter 2nd person\'s age: '))

console.log('The sum of the ages of ' + name1 + ' and ' + name2 + ' is ' + (age1 + age2))