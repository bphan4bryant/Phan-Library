/* File Name: scope.js
*
* This is an example of variable scope.
*
* Author: Bryant Phan
*/

let a = 3

if(a > 5) {
    let b = 1
    console.log('b = ' + b)
} else {
    console.log('b = ' + b)
}