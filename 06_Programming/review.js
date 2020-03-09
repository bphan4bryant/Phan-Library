// File Name: review.js
//
// This reviews what we just did.
//
// Author: Bryant Phan

let nums = [5.6, -2.3, 4.1, -9.2, 3.8]

console.log(nums[3])
console.log(nums.slice(3,5))

nums.forEach(num => {
    if(num > 0) {
        console.log(num + ' ')
    } else {
        console.log('***')
    }
})

console.log(nums.concat(['a', 'b', 'c', 'd']).slice(4,7))
