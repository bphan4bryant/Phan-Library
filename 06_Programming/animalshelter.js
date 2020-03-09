// File Name: animalshelter.js
//
// This outputs a business card for an animal shelter
//
// Author: Bryant Phan

const printStars = function() {
    for(let i=1; i<=3; i++) {
        if(i==2){
            console.log('* * * * * * * * * * * * * * * * * * * * * * * ')
        }
        else{
            console.log(' * * * * * * * * * * * * * * * * * * * * * * *')
        }
    }
}

printStars()
console.log('   All Creatures Big and Small Shelter')
console.log('   Lacona, New York')
console.log('   USA')
printStars()