// fileName: forEach.js
//
// This shows how to apply an opersations.
//
// Author: Bryant Phan

const vals = [0,1,2,3]
const words = ['Dad', 'cat', 'dog', 'bird']
let sum = 0, char = '!', word = '', phrase = ''

// Find the sum
vals.forEach(num => {
    sum += num * num
})
console.log(vals)
console.log('sum of the squares: ' + sum)

console.log(words)
words.forEach(w => {
    word = char + w
    console.log(word)
})

words.forEach(w => {
    phrase = phrase + w
})

console.log(phrase)
